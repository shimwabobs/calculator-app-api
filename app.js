import http from "http";
import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";

const host="localhost";
const port=3809;
const app= express();
const server=http.createServer(app);

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.post("/add",(req,res)=>{
    const num1=req.body.num1;
    const num2=req.body.num2;
    const sum=num1+num2;
    res.status(200).json({
        message:"It works well",
        result:sum,
    });
    
});

app.post("/sub",(req,res)=>{
    const num1=req.body.num1;
    const num2=req.body.num2;
    const sub=num1-num2;
    res.status(200).json({
        result:sub,
    });
});

app.post("/product",(req,res)=>{
    const num1=req.body.num1;
    const num2=req.body.num2;
    const prod=num1*num2;

    res.status(200).json({
        result:prod,
    });
});

app.post("/quo",(req,res)=>{
    const num1=req.body.num1;
    const num2=req.body.num2;
    const quo=num1/num2;
    res.status(200).json({
        result:quo,
    });
})

app.post("/power",(req,res)=>{
    const num1=req.body.num1;
    const num2=req.body.num2;
    const pwer=num1**num2;
    res.status(200).json({
        result:pwer,
    })
})


server.listen(port,host,()=>{console.log(`Works on ${port} on ${host}`)});