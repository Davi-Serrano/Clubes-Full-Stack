const express = require("express");
const router = express.Router();
const Clube = require("../models/Clubes");

router.use(express.json())

router.post("/info", async (req, res) => {


    const newClube = {
        nome: req.body.nome,
        imagem: req.body.imagem,
        nascimento: req.body.nascimento,
 
    }

    new Clube(newClube).save().then(() => {
        console.log("Salvo com sucesso")
    }).catch((err) => {
        console.log(err)
    })

})

router.get("/show", (req, res) => {
   
    Clube.find().lean().then((data) => {
        res.send(data)      
   
    })
        .catch((err) =>{
        res.status(400).send("Erro ao obter informações")
   
    })
        
});

module.exports = router


