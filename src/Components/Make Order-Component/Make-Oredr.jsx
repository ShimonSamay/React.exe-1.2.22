import React, { useContext, useEffect } from "react";
import { AgentContext } from "../../Contexts/Agent-Context";

export default function MakeOrder() {
  let { agent , setAgent} = useContext(AgentContext); // Destruction .

  useEffect(() => {
    alert(`Make Order - Order Number : ${agent.Orders}`);
  }, [agent]);

  function updateValues(e) {
    agent[e.target.name] = e.target.value; // How to update multiple fields in object using one function that takes the required filed from the input name .
  }

  function updateAll() {
    setAgent({...agent}) ; // Serialization is needed when your state is an object and you want to update the state and  . 
  }

  return (
    <div>
      <p>{agent.AgentName}</p>
      <input name="AgentName" onChange={updateValues} placeholder="Agent Name"/>
      <input name="Orders" onChange={updateValues} placeholder="Order Number" />
      <input name="Email" onChange={updateValues} placeholder="Email" />
      <button onClick={updateAll}> Print </button>
    </div>
  );
}
