const express = require("express");
const app = express()

app.use((req, res) => {
    console.log("we got a new request!")
})

app.get("/", (req, res) => {
    res.send("This should be the homepage!")
})

app.get("/resume", (req, res) => {
    res.send("This should be the resume page!")
})

app.get("/travel", (req, res) => {
    res.send("This is the travel page!")
})

app.get("/contact", (req, res) => {
    res.send("This is the contact me page!")
})

app.get("*", (req, res) => {
    res.send("Error!")
})

app.listen(3000, () => {
    console.log("listening on port 3000!")
})