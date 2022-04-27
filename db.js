// const mongoose= require("mongoose");




// mongoose.connect(mongoURL, {useUnifiedTopology: true ,useNewUrlParser: true})

// var db= mongoose.connection 

// db.on('connected', () =>{
//     console.log("mongodb connection successful");
// });

// db.on('error', ()=>{
//     console.log("mongodb connection failed");
// });

// module.exports =mongoose 

const mongoose =require("mongoose");



mongoose.connect( mongoURL, {useUnifiedTopology:true, useNewUrlParser: true})

var db= mongoose.connection

db.on("connected", ()=> {
    console.log("mongoDB successfully connected");
})

db.on("error", ()=>{
    console.log("mongoDB not Connected")
})

module.exports =mongoose