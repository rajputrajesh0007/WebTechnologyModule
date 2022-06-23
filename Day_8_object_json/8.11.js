// simplest arraylist :: blank
let list = [];
let list1 = [1,2,3,4,5];
let list2 = ["Mumbai","Delhi","Surat","Ooty"];

let num =''
for(let item of list1){
    num = num+item+' ';
}
console.log(num);

let str='';
for(let item of list2){
    str += item +' ';
    
}
console.log(str);
console.log("**************************");
for(let item of list2){
    console.log(item);
}