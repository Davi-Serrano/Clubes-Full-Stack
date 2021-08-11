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
        console.log("Criado e salvo com sucesso")
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

router.get("/show/:id", (req, res) => {

    Clube.findOne({_id: req.params.id}).lean().then((clube) =>{

        res.send( {clube: clube})
    }).catch((err) =>{
        console.log(err)
        })
        
})



router.put("/change", (req, res) =>{

    
    Clube.findOne({_id: req.body.id}).then((clube) => {
        
        clube.nome = req.body.nome
        clube.imagem =  req.body.imagem
        clube.nascimento = req.body.nascimento
        
        clube.save().then( () =>{   
           console.log("Modificado com sucesso")

       }).catch( (err) =>{
        console.log("Houve em erro" + err )

       })
    
    })
})

router.post("/del", (req, res) =>{

    Clube.deleteOne({_id: req.body.id}).then(() => {
        console.log("Deletado com sucesso")
    }).catch((err) =>{
        console.log(err)
    })
})

module.exports = router


