var async = function (){
    setTimeout(function () {log("Coming out later, although been called the previous one!")}, 2000)
}

var adder=function(first,second){
    var sum=first+second
    return sum
}

var log=function(msg){
    console.log("[Log]: ", msg)
}

var express = require ('express')
var app = express()

app.get('/',function (req, res){
    res.send('hello world')
})


const express = require ("express");
const res = require ('express/lib/response');
const app = express();
const addTwoNumber = (n1, n2 ) => {
    return n1+n2;
}

app.get("/addTwoNumber",(req,res)=>{
    const n1 = ParseInt(req.query.n1);
    const n2 = ParseInt (req.query.n2);
    const result = addTwoNumber(n1,n2);
    res.json({statuscode:200, data: result});
});

console.log (addTwoNumber(19,21));
const port=3040;
app.listen(port,()=> {
    console.log("Hello I'm listening to port"+port);
})

app.listen(3000)

log("hello world")
log("Welcome to SIT323!")
log("The sume is"+adder(5,6))
async();
log("THis is going to pop out before the previous one!")
