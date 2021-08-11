
import {BrowserRouter, Route, Switch} from "react-router-dom"
import ClubesProvider from "./Context/Clubes";

import  Create from "./pages/Create"
import Read from "./pages/Read"
import Uptade from "./pages/Uptade";


function App() {
  
  return (
     <BrowserRouter>
      <Switch>
        <ClubesProvider>
          
        <Route path="/" exact={true} component={Create} />
        <Route path="/edit/:id"  component={Uptade} />
        <Route path="/show" exact={true} component={Read} />
      
        </ClubesProvider>
        
       </Switch>     
     </BrowserRouter>

    
  );
}

export default App;