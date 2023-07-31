const express = require("express");
const PORT = 3001;

const app = express();

app.get("/", (req, res) => res.json({ message: "Hello World" }));
app.get("/healthy", (req, res) => res.json({ live: true }));

app.listen(PORT, () => console.log("The server is listening on port: " + PORT));
