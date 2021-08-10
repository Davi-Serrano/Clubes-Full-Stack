import { useState } from 'react'
import axios from "axios"

export default function Postagem() {
    const [nome, setNome] = useState("")
    const [imagem, setImagem] = useState("")
    const [nascimento, setNascimento] = useState("")


    function postTime() {
        axios.post("http://localhost:8000/info", {
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

                    <div onClick={postTime}>Enviar</div>          

              </form>
        </div>
    )
}