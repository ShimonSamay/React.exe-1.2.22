import React, { useContext, useEffect } from "react";
import { AgentContext } from "../../Contexts/Agent-Context";

export default function Order() {
  let agentValue = useContext(AgentContext);
  useEffect(() => {
    alert(
      `Order Component - Email : ${agentValue.agent.Email} | Orders Amount : ${agentValue.agent.Orders}`
    );
  }, [agentValue.agent]);

  return (
    <div>
      <p>Order amount : {agentValue.agent.Orders}</p>
      <button onClick={() =>  agentValue.setAgent(agentValue.agent.Orders+1)}>Click</button>
    </div>
  );
}
