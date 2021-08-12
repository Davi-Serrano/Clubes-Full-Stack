import axios from "axios"
import { useState, useEffect } from "react"
import {  useParams } from "react-router-dom"
import { Form, Section, Button } from "./styled"

export default function UptAndDel() {

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
  
    async function handleSumbmit (){
    
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
   
        <Form>
                <input type="text" onChange={e => setNome(e.target.value)}/>
                <input type="text" onChange={e => setImagem(e.target.value)}/>
                <input type="text" onChange={e => setNascimento(e.target.value)}/>
            
                <Section>
                    <Button onClick={handleSumbmit}>Editar</Button>      
                    <Button> <a href="/show">Clubes</a>  </Button>
                    <Button onClick={deleteClube}>Excluir</Button>  
                </Section>

        </Form>

    )
}
