const mongoose = require("mongoose");

const ClubesSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
        unique: true,
    },
    imagem: {
        type: String,
        require: true,
    },
    nascimento: {
        type: Number,
        required: true,
        lowercase: true,
    },
});


const Clube = mongoose.model("Clube", ClubesSchema);

module.exports = Clube;