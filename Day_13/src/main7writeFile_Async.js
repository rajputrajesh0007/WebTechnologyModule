// Import the filesystem module
const fsa = require("fs");
const fileName = "src/writeFileInAsync.txt";
const content = "My name is Rajesh and about you ?";
fsa.writeFile(fileName, content, "utf-8", (error, data) => {
    if (!error) {
        console.log(data);
    } else {
        console.log(error, "occur!!");
    }

});