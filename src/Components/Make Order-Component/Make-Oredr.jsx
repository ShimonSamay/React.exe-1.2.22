import React, { useContext, useEffect } from "react";
import { AgentContext } from "../../Contexts/Agent-Context";

export default function MakeOrder() {
  let agentValue = useContext(AgentContext);
  useEffect(() => {
    alert(`Order Number : ${agentValue.agent.Orders}`);
  }, [agentValue.agent]);

  function updateagentName(e) {
    agentValue.agent.AgentName = { AgentName: e.target.value };
  }

  function updateOrderNumber(e) {
    agentValue.agent.Orders = { Orders: e.target.value };
  }

  function updateEmail(e) {
    agentValue.agent.Email = { Email: e.target.value };
  }
  return (
    <div>
      <p>{agentValue.agent.AgentName}</p>
      <input onChange={updateagentName} placeholder="Agent Name" />
      <input onChange={updateOrderNumber} placeholder="Order Number" />
      <input onChange={updateEmail} placeholder="Email" />
      <button onClick={() => agentValue.setAgent(agentValue.agent.Orders)}> Print </button>
    </div>
  );
}
