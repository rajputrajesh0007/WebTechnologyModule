//===========Synchronus=================
// Import the filesystem module
const fsf = require("fs");

const fileName = "C:Users/vip/Desktop/1.html";
let output = fsf.readFileSync(fileName, { encoding: "utf-8" });
console.log(output);