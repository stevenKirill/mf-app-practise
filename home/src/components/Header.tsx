import React, { ReactElement } from "react";
import Login from "cart/Login"
import { MiniCart } from "cart/MiniCart";

export default function Header(): ReactElement {
  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
        <div className="flex">
          <div className="flex-grow">Spinners</div>
          <div className="flex-end relative">
            <MiniCart />
            <Login />
          </div>
        </div>
    </div>
  );
}