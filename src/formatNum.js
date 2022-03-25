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

console.log(format_with_array(11223345.12234));
