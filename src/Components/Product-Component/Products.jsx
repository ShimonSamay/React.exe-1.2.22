import React, { useContext, useEffect } from "react";
import { AgentContext } from "../../Contexts/Agent-Context";

export default function  Product () {
    let {agent,setAgent} = useContext(AgentContext);
    useEffect(() => {
        alert(`product component - Welcome Agent Name : ${agent.AgentName}`)
    } , [])
    return (
        <div>
            <p>Product component</p>
        </div>
    )
}