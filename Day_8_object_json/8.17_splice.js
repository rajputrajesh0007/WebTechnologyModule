let techList = ["java","DSA","DBT"];
console.log(techList);

//Add at specific position
let addElement=techList.splice(2,0,'javascript','OS');
console.log(techList);

//Remove at specific position
let removeElement = techList.splice(3,1);
console.log(techList);
console.log( "Removed element is -->"+removeElement);

