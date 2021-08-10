import { useState } from "react"
import axios from "axios"

function App() {
  const [times, setTimes] = useState([])
  const [ nome, setNome ] =useState("")
  const [ imagem, setImagem ] =useState("")
  const [ nascimento, setNascimento ] =useState("")
 
  
  

  function postTime(){
      axios.post("http://localhost:8000/info", {
        nome: nome,
        imagem: imagem,
        nascimento: nascimento,
      }).then( ()=>{
        console.log("sucesso")
      }).catch ( (err) =>{
        console.log(err)
      })
}

async function showTime(){
  await axios.get("http://localhost:8000/show").then( res => {
    setTimes( res.data)
    console.log(times[0].nome)
  })
}


  return (
    <div className="App">
      <form>

      <input onChange={e => setNome(e.target.value)}/>
      <input onChange={e => setImagem(e.target.value)}/>
      <input onChange={e => setNascimento(e.target.value)}/>


      <div onClick={postTime}>Enviar</div>
  

      </form>

      <div onClick={showTime}>Show-me</div>



    </div>
  );
}

export default App;
