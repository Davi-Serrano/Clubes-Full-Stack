
import {BrowserRouter, Route, Switch} from "react-router-dom"

import  Postagem from "./pages/postagem"
import Mostrar from "./pages/Mostrar"

function App() {
  
  return (
     <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Postagem} />
        <Route path="/show" exact={true} component={Mostrar} />   
       </Switch>     
     </BrowserRouter>

    
  );
}

export default App;