let ref={
    id:1,
    firstName:"rajesh",
    "user-name":"rajesh@girase",
    address:{city:"surat",state:"gujarat"}
}

// Access the member
console.log(ref.firstName);
console.log(ref["user-name"]);

// Add new member
ref["password"]="@xyz#";
console.log(ref);
// Delete Member
delete ref.id;
delete ref.password;
delete ref["user-name"];

// Modify the member
ref.firstName="Rajesh Girase";
console.log(ref);

// Add memeber in nested object;
ref.address.zipeCod = "394021";

ref.address.state = "Gujarat";
console.log(ref);

// Add nested object
ref.Graduate ={stream:"mechanical",university:"NMU"};
console.log(ref);