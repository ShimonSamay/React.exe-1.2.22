import React, { useContext, useEffect } from "react";
import { AgentContext } from "../../Contexts/Agent-Context";

export default function Order() {
  let {agent , setAgent} = useContext(AgentContext);
  useEffect(() => {
    alert(
      `Order Component - Email : ${agent.Email} | Orders Amount : ${agent.Orders}`
    );
  }, [agent]);

  function UpdateOrder() {
    agent.Orders+=1 ;
   setAgent({...agent});
  }

  return (
    <div>
      <p>Order amount : {agent.Orders}</p>
      <button onClick={UpdateOrder}>Click</button>
    </div>
  );
}
