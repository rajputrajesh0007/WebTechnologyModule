// ==============promise with Async and await to avoid Then and catch block=======================
// Import the filesystem module
async function main() {
    const fspromise = require("fs/promises");
    const fileName = "C:Users/vip/Desktop/1.html";
    const data = await fspromise.readFile(fileName, { encoding: "utf-8" });
    console.log(data);
}
main();
console.log("sdfsd");