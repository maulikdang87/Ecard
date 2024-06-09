const mongoose = require('mongoose');
const express = require("express");
const { card } = require('./db');
const bodyParser = require('body-parser');
const cors = require ("cors")


const app = express();

app.use(bodyParser.json());
app.use(cors());


const port = 3000 || process.env.PORT;

app.get("/cards", async (req,res)=>{
    try{
        const response = await card.find({})

        res.json({response})
        console.log("shown")
    }
    catch(err){
        console.log(err);
        res.json(404).send("cant retrieve required data")
    }
})

app.post("/create",async(req,res)=>{

    const createPayload = req.body
    console.log(createPayload)
    await card.create({
        name : createPayload.name,
        description : createPayload.description,
        interests : createPayload.interests
    })
    res.json({
        msg: "card has been created"
    })
})

app.listen(port, (res,req)=>{
    console.log(`listening on ${port}`)
})