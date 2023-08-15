const express = require("express");
const PORT = 3000;

const app = express();

app.get("/", (req, res) => res.json({ message: "Sample Node", podName: process.env.POD_NAME }));
app.get("/healthy", (req, res) => res.json({ live: true }));

app.listen(PORT, () => console.log("The server is listening on port: " + PORT));