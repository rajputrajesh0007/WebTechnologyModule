const fspromise = require("fs/promises");

async function main() {
    try {
        const fileName = "src/writeFileInPromiseExceptionHandle.html";
        const content = `<div><h2>Helloooo...World</h2></div>`;
        const output = await fspromise.writeFile(fileName, content, "utf-8");
        console.log(output);
    } catch (e) {
        console.log(e, "Error Occur..!");
    }
}
main();

