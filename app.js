import http from "http";
import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";

const port=3000;
const host="localhost";
const app=express(http);

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.get("/",(req,res)=>{
    res.status(200).json({
        message:"It worke well"
    })
}).listen(port,host,()=>{console.log("It works")});