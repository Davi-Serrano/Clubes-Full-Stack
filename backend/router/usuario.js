const express = require("express");
const router = express.Router();
const Clube = require("../models/Clubes");

router.post("/info", async (req, res) => {

    const { nome }  = req.body

    try {
        
        if (await Clube.findOne({ nome })) {
            return res.status(400).send({error: "Clube já cadastrado"})
        }
        
        const clube = await Clube.create(req.body);
        return res.send({
            clube
        });
        
    }
        catch (err) {
        res.status(400).send("erro ao cadastrar")
    }

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


