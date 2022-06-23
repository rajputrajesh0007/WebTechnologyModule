let stdRef ={
    id : 1,
    firstName:"Rajesh",
    address: {city:'surat',state:'gujarat'}  
};

// Access the members of the object :: DOT OPERATOR
console.log(stdRef)
console.log(stdRef.id);
console.log(stdRef.firstName);
console.log(stdRef.address);
console.log(stdRef.address.city);

// Lets update the object
// Add New Member :: EMAIL
stdRef.email = "rajesh@ss.co";
console.log(stdRef);
stdRef["password"] = "rg@!#23";
console.log(stdRef);
console.log(stdRef["password"]);


// WITH DOT OPERATOR :: CANT USE SPECIAL CHARACTER
// stdRef.user-name = "adfasf";   NOT OK bcoz it has hipan(-) in sach case use [] instead of dot(.)

stdRef["user_name"] = "rajesh@girase";
console.log(stdRef["user_name"]);


