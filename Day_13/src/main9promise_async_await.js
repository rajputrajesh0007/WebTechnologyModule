const fspromise = require("fs/promises");
const fileName = "src/writeFileInPromiseAsync_await.json";

async function main() {
    const content = `{ "id": 1, "name": "Rajesh","email":"abc@12" }`;
    const output = fspromise.writeFile(fileName, content, "utf-8");
    console.log(await output);
}
main();

