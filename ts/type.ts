interface A {
  c: string;
  d: string;
}
interface B {
  c: number;
  e: string;
}
type ABC = A & B;
let abc: ABC = {
  d: "name",
  e: "age",
};

console.log("aa", abc);
