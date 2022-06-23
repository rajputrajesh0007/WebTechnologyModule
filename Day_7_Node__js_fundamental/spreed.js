
//ES-5
function sum(a, b, c) {
    console.log(a + b + c);
}
let arr = [2, 2, 2];
sum.apply(null, arr);

//=====ES-6===spread-operator
function sum(a, b, c) {
    console.log(a + b + c);
}
let arr1 = [2, 2, 2];
console.log(...arr1);   //this will get value of array
sum(...arr1);

//========concatination==========
let ar1 = [1, 2, 3];
let ar2 = [4, 5, 6];
let ar3 = [7, 8, 9];
//ar1=ar1.concat(ar2);
//console.log(ar1);

//spread operation
ar4 = [...ar1, ...ar2, ...ar3];
console.log("done",ar4);

//====copy and append new element
    //not proper to copy arra1 to arra2
let arc1 = [1,2,3];
let arc2 = arc1;
arc2.push(4,5);
console.log(arc1);
console.log(arc2);
//=========Spread=============
let sprd1 =[10,20,30];
let sprd3 =["rajesh","akshay",90,100];
let sprd2 = [...sprd1,40,50,...sprd3];
console.log("sabas-->",sprd2);
console.log(sprd1);