import { useState } from "react"
import axios from "axios"

import  Postagem from "./pages/postagem"

function App() {
  const [times, setTimes] = useState([])


  async function showTime() {
    await axios.get("http://localhost:8000/show").then(res => {
      setTimes(res.data)
      console.log(times[0].nome)
    })
  }


  return (
     <div className = "App" >
       <Postagem />
        <div onClick = {showTime}> Mostart </div>

    </div>
  );
}

export default App;