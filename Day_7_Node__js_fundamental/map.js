//*************************************** */
let list = ["Mumbai", "pune", "kochi"];
console.log(list);

list.map((item) => {
  console.log(item);
});
//******************************************** */
const arr = [11, 15, 15, 3];
const b = arr.map((x) => {
  return x * 10;
});
console.log(b);
//*************ARRAY of object******************* */

const ar1 = [
  { name: "Rajesh", email: "rajesh@123.com" },
  { name: "Akshay", email: "akshayh1@123.com" },
];
const c = ar1.map(fun);
function fun(z, i) {
  return i + " " + z.name + " " + z.email;
}
console.log(c);
