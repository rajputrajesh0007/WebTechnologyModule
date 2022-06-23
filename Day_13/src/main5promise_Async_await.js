// =====promise with Async and await Exception handling=======================
const fspromise = require("fs/promises");

async function main() {
    try {
        const fileName = "C:Users/vip/Desktop/1.html";
        const data = await fspromise.readFile(fileName, { encoding: "utf-8" });
        console.log(data);
    } catch (e) {
        console.log(e, "error ocur!!");
    }
}
main();