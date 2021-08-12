import { useState } from 'react'
import axios from "axios"

import {Form, Section, Button} from './styled'


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
        
              <Form>
                    <label>Clube:</label>
                    <input onChange={e => setNome(e.target.value)}/>
                    <label>Link Imagem:</label>
                    <input onChange={e => setImagem(e.target.value)}/>
                    <label>Ano de Nascimento:</label>
                    <input onChange={e => setNascimento(e.target.value)}/>
                    
                    <Section>
                        <Button onClick={createClube}>Create</Button>      
                        <Button > <a href="/show"> Read </a></Button>    
                    </Section>

              </Form>
       
    )
}