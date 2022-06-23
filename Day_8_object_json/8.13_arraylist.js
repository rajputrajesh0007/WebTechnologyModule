let list =["Surat","Mumbai"];

// this will override the DELHI
list[0] = "Delhi";
console.log(list);

// Add New Member in the begining of the array
list.unshift("Surat");
list.unshift("Pune");
list.unshift("Banglore");
console.log(list);

// Remove member from the begiing of the array;
list.shift();
list.shift();
console.log(list);




