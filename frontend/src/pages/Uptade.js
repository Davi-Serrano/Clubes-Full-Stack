import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Uptade() {

    const [ clube, setClube ] = useState({clube:{
        nome: "loading...",
        imagem: "loading...",
        nascimento: "loading...",
    }})
    const [ nome, setNome ] = useState("")
    const [ imagem, setImagem ] = useState("")
    const [ nascimento, setNascimento ] = useState("")

    const { id } = useParams()

  async  function getClubeData() {
        await axios.get(`http://localhost:8000/show/${id}`).then( (res)=>{
            setClube(res.data)
            
        }).catch( (erro)=>{
            console.log("Houve um erro" + erro)
            
        })
    }

    useEffect(() => {
        getClubeData()
    }, [])

    console.log(clube)
  
    async function uptadeClube (){
    
          await  axios.put(`http://localhost:8000/change`, {
                nome: nome,
                imagem: imagem,
                nascimento: nascimento,
            }).then(() => {
                console.log("sucesso")
            }).catch((err) => {
                console.log(err)
            })
       
    }

    console.log(nascimento)
    return (
        <div>
       
              <input value={clube.clube.nome} onChange={e => setNome(e.target.value)}/>
              <input value={clube.clube.imagem} onChange={e => setImagem(e.target.value)}/>
              <input value={clube.clube.nascimento}  onChange={e => setNascimento(e.target.value)}/>

              <div onClick={uptadeClube}>Enviar</div>      
              <a href="/show">Read</a>    

     
  </div>
    )
}
