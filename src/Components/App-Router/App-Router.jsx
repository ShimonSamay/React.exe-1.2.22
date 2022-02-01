import React from "react";
import Footer from "../Footer-Component/Footer";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../Navbar/Navbar";

export default function AppRouter() {
  return (
    <div>
      <Header />
      <BrowserRouter>
      <NavBar/>
      <SideBar />
      </BrowserRouter>
      <Footer />
    </div>
  );
}
