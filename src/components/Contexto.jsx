import { createContext, useState } from "react";

const Contexto = createContext();

function ContextoProvider ({children}){
    const [user, setUser] = useState();

    return(
        <Contexto.Provider value={{user, setUser}}>
            {children}
        </Contexto.Provider>
    );
}

export {Contexto, ContextoProvider};