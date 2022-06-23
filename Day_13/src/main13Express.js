const express = require("express");

const app = express();
app.get("/", (req, res) => {
    const ref = { message: "im the root" };
    res.json(ref);
});
app.get("/post", (req, res) => {
    const ref = { message: "Posting nice message." };
    res.json(ref);
});
app.get("/user", (req, res) => {
    const ref = { message: "Im the user." };
    res.json(ref);
});
app.listen(3000, () => { console.log("server started") });
