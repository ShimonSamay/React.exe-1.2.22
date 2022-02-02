import React, { useContext } from "react";
import { AgentContext } from "../../Contexts/Agent-Context";

export default function Header() {
  let {agent , setAgent} = useContext(AgentContext);
  return (
    <div>
      <p>Agent : {agent.AgentName}</p>
    </div>
  );
}
