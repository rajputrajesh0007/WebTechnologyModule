// Import the filesystem module
const fspromise = require("fs/promises");
const fileName = "src/writeFileInPromise.txt";
const content = "I love JS!!!";
fspromise.writeFile(fileName, content, "utf-8").then((data) => {
    console.log(data);
})