let arr = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 },
];
// 递归
// function arrayToTree(arr, pid) {
//   let result = [];
//   getChildren(arr, result, pid);
//   return result;
// }

// const getChildren = (data, result, pid) => {
//   data.forEach( item => {
//     if (item.pid === pid) {
//       let newItem = {...item, children:[]};
//       result.push(newItem);
//       getChildren(data, newItem.children, item.pid)
//     }
//   })
// };

// Map 
function arrayToTree(arr) {
  const result = [];    // 存放结果
  const itemMap = {};
  // 先转成map存储
  for (const item of arr) {
    itemMap[item.id] = {...item, children: []}

  }
  for (const item of arr) {
    const id = item.id;
    const pid = item.pid;
    const treeItem = itemMap[id];
    if (pid === 0) {
      result.push(treeItem);
    } else {
      itemMap[pid].children.push(treeItem)
    }
  }
  return result;
}
console.log(arrayToTree(arr, 0));
