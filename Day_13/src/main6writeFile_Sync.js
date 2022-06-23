// Import the filesystem module
const fss = require("fs");

const fileName = "src/write_file_Sync.txt";
const data = "hey you how you doin, im fine, hurryy!!";
const output = fss.writeFileSync(fileName, data, { encoding: "utf-8" });

console.log(output);