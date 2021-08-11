import { useState, createContext, useContext} from "react"

export const ClubesContext = createContext();

export default function ClubesProvider({ children }){


    const [ clubes, setClubes ] = useState([]);

    return(

        <ClubesContext.Provider
        value={{
            clubes,
            setClubes
        }}
        > 
            
            {children}    
        
         </ClubesContext.Provider>

    )
}

export function useClubes(){
    const context = useContext(ClubesContext)
    const { clubes, setClubes }  = context ;

    return  { clubes, setClubes };
}