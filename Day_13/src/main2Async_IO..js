//===========Asynchronus=================
// Import the filesystem module
const fsa = require("fs");

const fileName = "C:Users/vip/Desktop/1.html";
fsa.readFile(fileName, { encoding: "utf-8" }, (err, data) => {
    if (err) {
        console.log(err, "error occur!");
        return;
    }
    console.log(data);
});
console.log("Hello world");