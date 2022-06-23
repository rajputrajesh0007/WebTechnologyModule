const express = require("express");
const app = express();


app.post("/user", (req, res) => {
    res.json({ message: "Hellooo Post method" });
});



app.listen(3500, (req, res) => { console.log("server started") });


