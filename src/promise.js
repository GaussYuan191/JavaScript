class Commitment {
  // 定义状态变量
  static fulfilled = "fulfilled";
  static pending = "pending";
  static reject = "reject";
  constructor(fn) {
    // 初始化状态
    this.state = Commitment.pending;
    this.value = undefined;
    this.reason = undefined;
    // 定义状态改变回调队列
    this.onResolveCallbacks = [];
    this.onRejectCallbacks = [];
    // 定义resolve方法
    let resolve = (value) => {
      // 如果当前的状态是等待态
      if (this.state === Commitment.pending) {
        // 先改变当前的状态
        this.state = Commitment.fulfilled;
        this.value = value;
        // 执行队列里的函数
        this.onResolveCallbacks.forEach((fn) => fn());
      }
    };
    let reject = (value) => {
      // 如果当前的状态是等待态
      if (this.state === Commitment.pending) {
        // 先改变状态当前的状态
        this.state = Commitment.reject;
        this.reason = value;
        // 执行队列里的函数
        this.onRejectCallbacks.forEach((fn) => fn());
      }
    };
    try {
      fn(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
  then(onFulfilled, onRejected) {
    // 判断参数是不是函数，如果不是函数则变成函数
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected =
      typeof onRejected === "function" ? onRejected : (value) => value;
    let commitment2 = new Commitment((resolve, reject) => {
      if (this.state === Commitment.fulfilled) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            // 解决链式调用
            resolveCommitment(commitment2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }
      if (this.state === Commitment.reject) {
        setTimeout(() => {
          try {
            let x = onRejected(this.value);
            resolveCommitment(commitment2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }
      if (this.state === Commitment.pending) {
        this.onResolveCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolveCommitment(commitment2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
        this.onRejectCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolveCommitment(commitment2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
      }
    });
    return commitment2;
  }
  // 实例方法
  catch(fn) {
    return this.then(null, fn);
  }
}
function resolveCommitment(commitment2, x, resolve, reject) {
  if (x === commitment2) {
    return reject(new TypeError("chaning cycle detected for commitment"));
  }
  let called;
  if (x != null && (typeof x === "object" || typeof x === "function")) {
    try {
      let then = x.then;
      if (typeof then === "function") {
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            resolveCommitment(commitment2, y, resolve, reject);
          },
          (err) => {
            if (called) return;
            called = true;
            reject(err);
          }
        );
      } else {
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    resolve(x);
  }
}
// resolve 方法
Commitment.resolve = function (val) {
  return new Commitment((resolve, reject) => {
    resolve(val);
  });
};
// reject 方法
Commitment.reject = function (val) {
  return new Commitment((resolve, reject) => {
    reject(val);
  });
};
// 设置三个变量 
let commit1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("demo1");
  }, 2000);
});
let commit2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("demo2");
  }, 1000);
});
let commit3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("demo3");
  }, 3000);
});
let commitList = [commit1, commit2, commit3];
// race 接收一个可迭代的对象，如数组，运行多个promise，其中那个最先执行完成，
// 就返回其状态，无论成功与否
// 使用场景: 请求超时提醒

// Commitment.race = function (commitments) {
//   // 判断参数的类型
//   if (commitments !== null && typeof commitments[Symbol.iterator] !== "function") {
//     throw new TypeError("arguments must a array")
//   }
//     return new Commitment((resolve, reject) => {
//       commitments.forEach(item => {
//         Commitment.resolve(item).then(value => resolve(value), err => reject(err))
//       })
//     });
// };
// Promise.newRace = function(commitList) {
//   if (commitList !== null && typeof commitList[Symbol.iterator] !== 'function') {
//     throw new TypeError("arguments must be a array")
//   }
//   return new Promise((resolve, reject) => {
//     commitList.forEach(item => {
//       Promise.resolve(item).then(value => resolve(value), err => reject(err))
//     })
//   })
// }
// Promise.newRace(commitList).then(res => {
//   console.log('race',res)
// },err => {
//   console.log('err',err)
// })

// all 接收一个可迭代对象，如数组，传入的promise状态全为resolve，则返回成功状态
// 否则只要一个reject，则返回reject状态
// 使用场景：前端发起多个请求并根据请求的顺序获取和使用数据
// 合并多个请求结果，并处理错误结果
// Promise.newAll = function (commitList) {
//   if (commitList !== null && typeof commitList[Symbol.iterator] !== 'function') {
//     throw new TypeError("arguments must be array")
//   }
//   return new Promise ((resolve, reject) => {
//     let len = commitList.length;
//     let result = []
//     commitList.forEach(item => {
//       Promise.resolve(item).then(value => {
//         result.push(value)
//         len--;
//         if (len === 0) {
//           return resolve(result)
//         }
//       }, err => {
//         return reject(err)
//       })
//     })
    
//   })
// }
// Promise.newAll(commitList).then(res => {
//   console.log(res)
// })
// any 接收一个可迭代的对象，如数组，传入的promise状态只要有一个为resolve，整个
// 返回成功的状态，全为reject，即返回reject
// 使用场景：最快从服务端检索资源，如果存在多台服务器，从最快的那台
// 获取资源
// Promise.newAny = function (commitList) {
//   let isIterator = parms => typeof parms[Symbol.iterator] === 'function';
//   return new Promise((resolve, reject) => {
//     if (commitList !== null && !isIterator(commitList)) {
//       reject(new TypeError("arguments must be a array"))
//     }
//     let len = commitList.length;
//     if (len === 0) reject("All promise were reject")
//     commitList.forEach(item => {
//       Promise.resolve(item).then(resolve, err => {
//         if (--len === 0) reject("All promise were reject")
//       })
//     })
//   })
// }
// Promise.newAny(commitList).then(res => {
//   console.log('any',res)
// })
// allSettled 只关心每个promise最后的结果，把结果返回
Promise.newAllSetlled = (commitList) => {
  let isIterator = params => typeof params[Symbol.iterator] === 'function';
  return new Promise((resolve, reject) => {
    if (!commitList || !isIterator(commitList)) {
      reject(new TypeError("arguments must be a array"))
    }
    let result = [];
    let len = commitList.length;
    commitList.forEach(item => {
      Promise.resolve(item).then(val => {
        result.push({"state": "fulfilled",value:val})
        len--;
      }, err => {
        result.push({"state":"rejected",reason:err})
        len--;
      }).finally(() => {
        if (len === 0) {
          resolve(result);
        }
      })
    })
  })
}
Promise.newAllSetlled(commitList).then(res=>console.log(res))