// const express=require("express");

// // const pizza= require("./models/pizzaModel")

// const db = require("./db");

// const app=express();

// app.use(express.json());

// app.get("/",(req,res) =>{
//     res.send("server is working ");

// })

// // app.get("/getpizzas", (req, res) => {
// //     Pizza.find({}, (err, docs) =>{
// //         if (err){
// //             console.log(err);
// //         }else{
// //             res.send(docs);
// //         }

// //     })
// // })


// const port = process.env.PORT || 5000;

// app.listen(port, () => "server running on port 5000.");

const express= require("express");
const app= express();

const pizza= require("./models/pizzaModel");

const db= require("./db")

app.use(express.json());

app.get("/",(req,res) =>{
    res.send("server is running on port 5000")
})

app.get("/getpizzas",(req,res)=>{
    pizza.find( {},(err,docs) => {
        if(err){
            console.log(err);
        }else{
            console.log("pizzaschema been fetch successfully");
            res.send(docs);
        }
    })
})

const port= process.env.PORT || 5000;

app.listen( port, ()=> "server is running on port");
