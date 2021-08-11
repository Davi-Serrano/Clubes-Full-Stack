import { useState } from 'react'
import axios from "axios"

export default function Create() {
    const [nome, setNome] = useState("")
    const [imagem, setImagem] = useState("")
    const [nascimento, setNascimento] = useState("")


  async  function createClube() {
       await axios.post("http://localhost:8000/info", {
            nome: nome,
            imagem: imagem,
            nascimento: nascimento,
        }).then(() => {
            console.log("sucesso")
        }).catch((err) => {
            console.log(err)
        })
    }
    return ( 
        <div>
              <form>
                    <input onChange={e => setNome(e.target.value)}/>
                    <input onChange={e => setImagem(e.target.value)}/>
                    <input onChange={e => setNascimento(e.target.value)}/>

                    <div onClick={createClube}>Enviar</div>      
                    <a href="/show">Read</a>    

              </form>
        </div>
    )
}