import React, { useContext, useEffect } from "react";
import { AgentContext } from "../../Contexts/Agent-Context";

export default function MakeOrder() {
  let agentValue = useContext(AgentContext);
  console.log(agentValue.agent);
  useEffect(() => {
    alert(`Make Order - Order Number : ${agentValue.agent.Orders}`);
  }, [agentValue.agent]);

  function updateagentName(e) {
    agentValue.agent.AgentName = e.target.value;
  }

  function updateOrderNumber(e) {
    agentValue.agent.Orders = e.target.value;
  }

  function updateEmail(e) {
    agentValue.agent.Email = e.target.value;
  }
  function updateAll() {
    let AgentName = agentValue.agent.AgentName;
    let Orders = agentValue.agent.Orders;
    let Email = agentValue.agent.Email;
    return { AgentName, Orders, Email };
  }

  return (
    <div>
      <p>{agentValue.agent.AgentName}</p>
      <input onChange={updateagentName} placeholder="Agent Name" />
      <input onChange={updateOrderNumber} placeholder="Order Number" />
      <input onChange={updateEmail} placeholder="Email" />
      <button onClick={() => agentValue.setAgent(updateAll())}> Print </button>
    </div>
  );
}
