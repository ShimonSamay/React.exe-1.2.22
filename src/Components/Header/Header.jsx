import React, { useContext } from "react";
import { AgentContext } from "../../Contexts/Agent-Context";

export default function Header () {
    let agentValue = useContext(AgentContext);
    return (
        <div>
        <p>Agent : {agentValue.agent.AgentName}</p>
        </div>
    )
}