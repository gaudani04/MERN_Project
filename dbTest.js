const  mongoose  = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const Food = require('./item');
const cors = require('cors');

const connectionString = "mongodb+srv://myData1:myData1@cluster0.sjqht.mongodb.net/starbucks";

mongoose.connect(connectionString)
.then(()=>{
    console.log("Connected with CloudDB");

    const app = express();
    app.use(cors({origin:"http://localhost:3000"}));
    app.use(bodyParser.urlencoded({extended:false}));
    
    app.get('/home',(req,res)=>{
        res.send("Welcome");
    });
    //getAll
    app.get('/food',async(req,res)=>{
        const ans = await Food.find();
        res.send(ans);
    })
    //getById
    app.get('/food/:id',async(req,res)=>{
        const ans = await Food.findOne({itemNo:req.params.id});
        console.log(ans);
        res.send(ans);
    });

    //post
    app.post('/food',async(req,res)=>{
       const foodItem = new Food({
            ...req.body
        })
        const ans = await foodItem.save();
        res.send(ans);
    })
    //delete
    app.get('/food/:id',async(req,res)=>{
        const ans = await Food.deleteOne({itemNo:req.params.id});
        res.send(ans);
    });


    app.listen(3005,()=>{
        console.log("server started at 3005");
    })
})