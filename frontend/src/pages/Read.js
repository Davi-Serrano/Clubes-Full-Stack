import { useEffect } from "react"
 import { useClubes } from "../Context/Clubes"

import { Link } from "react-router-dom"
import axios from "axios"

import { Nav, Button, Club} from "./styled"

export default function Read() {
  
    const {clubes, setClubes} = useClubes()
    
    async function showClube() {
      await axios.get("http://localhost:8000/show").then(res => {
        setClubes(res.data)
        })
      }

      useEffect(() => {
        showClube()
      }, [])

    return (
        <Nav>
            {clubes.map( time => {
              return(
                <Club key={time._id}>
                    <label> {time.nome} </label>
                      <img src={time.imagem} width="300px" />
                    <label> {time.nascimento} </label>
                    
               <Button>
                <Link to={{pathname:`/edit/${time._id}` }}>
                  Editar
                 </Link> 
               </Button>
                </Club>
                
              )
            })}
        </Nav>        
    )
}    


