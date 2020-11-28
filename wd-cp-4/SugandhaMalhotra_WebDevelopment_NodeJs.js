> ❗Example: In this code, I have made a local module named as "app.js" file. This is a calculator code module❗
var calculator={
  add:function(a,b){
    console.log("Add function output : "+ (a+b));
  },
  subtract:function(a,b){
    console.log("Subtract function output: "+(a-b));
  },
  multiply: function(a,b){
    console.log("Multiply function output: "+(a*b));
  },
  divide: function(a,b){
    console.log("Divide function output: "+(a/b));
  }
};
module.exports= calculator;

>☝️ this code shows a module of a calculator that gives output based on function we require
>Now is the code of our main file "sample.js" in which we "require" this local module.

const express=require("express");
const app=express();

var calc=require("./app.js");

calc.add(3,4);

app.listen(3000,function(req,res){
  console.log("Server is running at port 3000");
});

>☝️ here we have required the local module and called the "add" function.
 
  
