import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./Components/App-Router/App-Router";
import AgentProvider from "./Contexts/Agent-Context";
import MakeOrder from "./Components/Make Order-Component/Make-Oredr";
import Product from "./Components/Product-Component/Products";
import Order from "./Components/Order-Component/Order";

function App() {
  return (
    <div className="App">
      <AgentProvider>
        <AppRouter />
        <MakeOrder/>
        <Product/>
        <Order/>
      </AgentProvider>
    </div>
  );
}

export default App;
