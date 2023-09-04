

const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log("In the middleware!!!");
    next(); // This next allows for request to go to next middleware
});

app.use((req, res, next) => {
    console.log("In the another middleware!!!");
    res.send('<h1>Hello from Express</h1>');
});

app.listen(3000)
