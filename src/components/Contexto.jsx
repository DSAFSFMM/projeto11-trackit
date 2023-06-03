import { createContext, useState } from "react";

const Contexto = createContext();

function ContextoProvider ({children}){
    const [user, setUser] = useState();
    const [progresso, setProgresso] = useState(0);

    return(
        <Contexto.Provider value={{user, setUser, progresso, setProgresso}}>
            {children}
        </Contexto.Provider>
    );
}

export {Contexto, ContextoProvider};