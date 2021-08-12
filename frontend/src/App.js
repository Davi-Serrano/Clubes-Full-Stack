
import {BrowserRouter, Route, Switch} from "react-router-dom"
import ClubesProvider from "./Context/Clubes";
import Global from "./Styled/Global";

import Header from "./Components/Header/header";

import  Create from "./Pages/Create"
import Read from "./Pages/Read"
import UptAndDel from "./Pages/UptAndDel";


function App() {
  
  return (
    <>
     <BrowserRouter>
        <Header />
      <Switch>
        <ClubesProvider>

        <Route path="/" exact={true} component={Create} />
        <Route path="/show" exact={true} component={Read} />
        <Route path="/edit/:id"  component={UptAndDel} />
        <Global />   
      
        </ClubesProvider>
        
       </Switch>  
    
     </BrowserRouter>
    </>
    
  );
}

export default App;