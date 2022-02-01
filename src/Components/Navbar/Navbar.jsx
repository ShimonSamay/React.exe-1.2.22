import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home-Component/Home";
import Order from "../Order-Component/Order";
import Product from "../Product-Component/Products";
import MakeOrder from "../Make Order-Component/Make-Oredr";
import Contact from "../Contact-Component/Contact";

export default function NavBar() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />}></Route>
      <Route path={"/order"} element={<Order />}></Route>
      <Route path={"/product"} element={<Product />}></Route>
      <Route path={"/makeorder"} element={<MakeOrder />}></Route>
      <Route path={"/contact"} element={<Contact />}></Route>
    </Routes>
  );
}
