function runAsync(x) {
  const p = new Promise((r) => setTimeout(() => r(x, console.log(x)), 1000));
  return p;
}
function runReject(x) {
  const p = new Promise((res, err) =>
    setTimeout(() => err(`Error: ${x}`, console.log(x)), 1000 * x)
  );
  return p;
}
Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)]).then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log("error11", err);
  }
);
