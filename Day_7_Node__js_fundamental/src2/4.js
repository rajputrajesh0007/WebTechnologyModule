let ref = {
  name: "Rajesh",
  id: 1,
};
let ref2 = { ...ref };
console.log(ref);
console.log(ref2);

//Modify
ref2.name = "Akshay";
console.log(ref2);
