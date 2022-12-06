const express = require("express");
const app = express();
const bp = require("body-parser");
const{urlencoded} = require("body-parser");
app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.listen(1234,function(){
    console.log("server is running")
})