// STRING TO NUMBER
let str="5";

console.log((str));
console.log(parseInt(str));

// OBJECT TO STRING
let std1 = {id:1,}
let stdStr = JSON.stringify(std1);
console.log(typeof(stdStr));
console.log(typeof(std1));

let std2 = {id:1,firstName:"Rajesh"};
let stdstr = JSON.stringify(std2);
console.log(typeof(std2));
console.log(typeof(stdstr));
console.log((std2));
console.log((stdstr));
console.log("****************************");
let std3 = {id:1,"firstName":"Rajesh",address:{city:"kochi"}};
let std3str =JSON.stringify(std3);
console.log((std3));
console.log((std3str));
console.log("****************************");
// STRING => OBJECT
let refstr = '{"id":1,"firstName":"Rajesh" , "address":{"city":"surat"}}';
console.log(refstr);
console.log(typeof(refstr));
console.log("****************************");
let refobj = JSON.parse(refstr);
console.log(refobj);
console.log(typeof(refobj));


