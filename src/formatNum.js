// 面试题 实现数字千分位
//
function format_with_array(number) {
  if (!number || typeof number != "number") return;
  let arr = number.toString().split(".");
  let intNumber = arr[0].split("");
  let res = '';
  res = intNumber.reverse().reduce((pre, cur, index) => {
    if (index !== 0 && index % 3 == 0) {
      return (pre = cur + "," + pre);
    } else {
      return (pre = cur + pre);
    }
  }, "");
  return res + (arr[1] ? "." + arr[1] : '');
}
// 正则
function format_with_reg(number) {
   let [integer, decimal = ''] = number.toString().split('.');
   return integer.replace(/\d{1,3}(?=((\d{3})+$))/g, '$&,') + (decimal ? '.' + decimal : '');
}

console.log(format_with_reg(1145223.124545));
