const express = require("express");
const app = express();

//how to read query parameter
//localhost:3000/post?name=rajesh
app.get("/post", (req, res) => {
    res.json({ message: `Hellooo ${req.query.name}` });
});

app.listen(3000, (req, res) => { console.log("server started") });


