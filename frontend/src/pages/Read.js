import { useEffect } from "react"
 import { useClubes } from "../Context/Clubes"
import { Link } from "react-router-dom"
import axios from "axios"


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
        <div>
            {clubes.map( time => {
              return(
                <div key={time._id}>
                   <p>{time.nome}</p>
               <p> {time.imagem} </p>
               <p> {time.nascimento} </p>
               
                <Link to={{pathname:`/edit/${time._id}` }}>
                  Editar
                 </Link> 
                </div>
                
              )
            })}
        </div>        
    )
}    


