// ===========Promises-with then and catch block=================
// Import the filesystem module
const fspromise = require("fs/promises");

console.log("1");

const fileName = "C:Users/vip/Desktop/1.html";
fspromise.readFile(fileName, { encoding: "utf-8" }).then((result) => {
    console.log(result);
}).catch((err) => { console.log(err, "err ocur!!"); });

console.log("2");
