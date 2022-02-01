import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div>
      <Link to={"/"}><button>Home</button></Link>
      <Link to={"/order"}><button>Order</button></Link>
      <Link to={"/product"}><button>Product</button></Link>
      <Link to={"/makeorder"}><button>Make Order</button></Link>
      <Link to={"/contact"}><button>Contact</button></Link>
    </div>
  );
}
