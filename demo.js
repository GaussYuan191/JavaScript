var a = {
  n: 1,
  valueOf() {
    return this.n++;
  },
};

console.log(a == 1 && a == 2 && a == 3);
