import { useState, useEffect } from "react"
import axios from "axios"


export default function Mostrar() {
  
    const [ times, setTimes ] = useState([]) 
    
    async function showTime() {
      await axios.get("http://localhost:8000/show").then(res => {
        setTimes(res.data)
        })
      }

      useEffect(() => {
        showTime()
      }, [])

    return (
        <div>
            {times.map( time => {
              return(
                <div key={time._id}>
               <p> {time.nome} </p>
               <p> {time.imagem} </p>
               <p> {time.nascimento} </p>
               
                </div>
              )
            })}
        </div>        
    )
}    


