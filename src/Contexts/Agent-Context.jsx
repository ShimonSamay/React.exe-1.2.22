import React, {  useState } from "react";


export let AgentContext = React.createContext() ;

export default function AgentProvider ({children}) {
    let [agent , setAgent] = useState({AgentName : "shimon"  , Orders : 18  , Email : "shimon@"}) ;
    return (
          <AgentContext.Provider value={{agent,setAgent}}>
            {children}
          </AgentContext.Provider>
    )
}