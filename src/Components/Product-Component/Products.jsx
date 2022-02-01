import React, { useContext, useEffect } from "react";
import { AgentContext } from "../../Contexts/Agent-Context";

export default function  Product () {
    let agentValue = useContext(AgentContext);
    useEffect(() => {
        alert(`product component - Welcome Agent Name : ${agentValue.agent.AgentName}`)
    } , [])
    return (
        <div>
            <p>Product component</p>
        </div>
    )
}