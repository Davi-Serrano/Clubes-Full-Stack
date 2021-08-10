const express = require('express')
const app = express()
const mongoose = require("mongoose")
const usuarios = require("./router/usuario")


//config mongoose
mongoose.connect('mongodb://localhost/Clubesinfo', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true}).then(()=> {
    console.log('MongoDB conectado')
}).catch((err)=> {
    console.log('Erro ao se conectar: ' + err)
})


app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get("/", (req, res) =>{
    res.send("hellow")
})

app.use("/", usuarios)

const PORT = 8000
app.listen(8000, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})