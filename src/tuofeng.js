// 将apple-red 变成驼峰

let str = "-apple-red-yellow"
// 正则
// function toUpperCase(str) {
//   if (!str) return;
//   let flag = str[0] === '-';
//   return str.replace(/[-]\w/g, function(match) {
//     if (flag) {
//       flag = false;
//       return match.split('')[1];  
//     } 
//     return match.split('')[1].toUpperCase();   
//   })
// }
function toUpperCase(str) {
  if (!str) return;
  let flag = str[0] === '-';
  let arr = str.split('-').filter(item => {
    if (item) {
      return item;
    }
  });
  if (!flag) {
    for (let i = 1; i < arr.length; i++) {
      let itemArr = arr[i].split('');
      itemArr[0] = itemArr[0].toUpperCase();
      arr[i] = itemArr.join('');
    }
  } else {
    for (let i = 1; i < arr.length; i++) {
      let itemArr = arr[i].split('');
      itemArr[0] = itemArr[0].toUpperCase();
      arr[i] = itemArr.join('');
    }
  }
  return arr.join('');
}
console.log(toUpperCase(str))