require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
const db = require(__dirname + "/database.js");
const ejs  = require('ejs');

//set up ejs template engine
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/",(req,res)=>{
    res.render('home')
});

app.get("/login",(req,res)=>{
    res.render('login')
});

app.get("/register",(req,res)=>{
    res.render('register')
})


app.listen(port, ()=> {
    console.log(`Server Listening on port${port}`)
})
