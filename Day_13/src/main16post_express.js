const express = require("express");
const app = express();

//middleware , without middleware you cant read data
app.use(express.json());

//read the data from body
app.post("/user", (req, res) => {
    res.json({ message: "Hellooo Post method", name: req.body.name, email: req.body.email, });
});

app.listen(3500, (req, res) => {
    console.log("server started");
});
