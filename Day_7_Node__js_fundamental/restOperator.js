//Normal function will do operator as much parameters are passed
// function sum(a,b){
//     console.log(a,b);
//     console.log(a+b);
// }
// sum(2,3,1,3,4,6);

// console.log("======Rest operator========");
// function sum(...inputs){
//     console.log(inputs);
//     console.log(...inputs);
//     let list = 0;
//     for(let i of inputs){
//         list +=i;
//     }console.log("sum-->>",list);
// }
// sum(1,2,3,4,5,6,7,8,9);

//*********Example-2 ***********/
function fun(a,b,...c){
    console.log(`${a}, ${b}`);
    console.log(c);
    console.log(c[0]);
    console.log(c.length);
    console.log(c.indexOf('Edan'));
}
fun("Ronaldo","neymar","pele","Messi","Edan");