const express = require("express")
const hbs = require("hbs")
const path = require("path")
const bodyparser = require("body-parser")

const app = express()

app.set("view engine","hbs")
hbs.registerPartials(path.join(__dirname + '/views/partials'));
app.use(express.static(path.join(__dirname,"/views/public")))



app.get("/",(req,res)=>{
    return res.render("index")
})
app.get("/about",(req,res)=>{
    return res.render("about")
})
app.get("/faq",(req,res)=>{
    return res.render("faq")
})
app.get("/service",(req,res)=>{
    return res.render("service")
})
app.get("/gallery",(req,res)=>{
    return res.render("gallery")
})
app.get("/contact",(req,res)=>{
    return res.render("contact")
})
app.post("/contact",(req,res)=>{
    console.log(req.body)
    return res.render("contact")
})


app.listen(80,()=>console.log("Server is Running at port 80"))