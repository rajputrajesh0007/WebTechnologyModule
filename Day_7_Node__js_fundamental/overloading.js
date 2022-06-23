//function overloading
function sum(p1,p2) {
    return p1+p2;
}
let result = sum(100,200);
console.log(result);

let result1 = sum(100);
console.log(result1);

let result2 = sum();
console.log(result2);

let result3 = sum(200,200,300);
console.log(result3);
