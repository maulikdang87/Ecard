const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://admin:iT3bbvTj2C8VMbqL@cluster0.mi9d5qn.mongodb.net/Week5');

const cardSchema = {
    name : String,
    description : String,
    interests : String
}

const card = new mongoose.model("CARDS",cardSchema)

module.exports= {card}