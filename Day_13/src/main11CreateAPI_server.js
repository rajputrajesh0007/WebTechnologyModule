const webserver = require("http");

// Create a local server to receive data from
const server = webserver.createServer((req, res) => {
    const list = [
        { id: 1, Name: "Rajesh" },
        { id: 2, Name: "Akshay" },
        { id: 3, Name: "Vishal" },
        { id: 4, Name: "Virpal" }
    ]
    res.writeHead(200, { 'content-type': 'application/json' });
    //to convert to json::string format
    res.end(JSON.stringify(list));
});

server.listen(3000);