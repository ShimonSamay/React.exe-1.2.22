import React, { useContext, useEffect } from "react";
import { AgentContext } from "../../Contexts/Agent-Context";

export default function  Product () {
    let agentValue = useContext(AgentContext);
    useEffect(() => {
        alert(` product component - Agent Name : ${agentValue.agent.AgentName}`)
    } , [])
    return (
        <div>
            
        </div>
    )
}