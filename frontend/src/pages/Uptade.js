import axios from "axios"
import { useState, useEffect } from "react"
import { Redirect, useParams } from "react-router-dom"

export default function Uptade() {

    const [ nome, setNome ] = useState("")
    const [ imagem, setImagem ] = useState("")
    const [ nascimento, setNascimento ] = useState("")

    const { id } = useParams()

  async  function getClubeData() {
        await axios.get(`http://localhost:8000/show/${id}`).then( (res)=>{
            
        }).catch( (erro)=>{
            console.log("Houve um erro" + erro)
            
        })
    }

    useEffect(() => {
        getClubeData()
    }, [])
  
    async function uptadeClube (){
    
          await  axios.put(`http://localhost:8000/change`, {
                id:id,
                nome: nome,
                imagem: imagem,
                nascimento: nascimento,
            }).then(() => {
                console.log("sucesso")
                window.location("/show")
            }).catch((err) => {
                console.log(err)
            })
       
    }

    function deleteClube(){
        axios.post("http://localhost:8000/del",{
            id:id
        })
    }
    return (
        <div>
        <form>
              <input type="text" onChange={e => setNome(e.target.value)}/>
              <input type="text" onChange={e => setImagem(e.target.value)}/>
              <input type="text" onChange={e => setNascimento(e.target.value)}/>

              <div onClick={uptadeClube}>Enviar</div>      
              <a href="/show">Read</a>    
              <div onClick={deleteClube}>Excluir</div>  

        </form>
  </div>
    )
}
