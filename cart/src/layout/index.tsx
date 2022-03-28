import React, { useEffect, FC } from "react";
import { getCart } from "../api/routes/cart";
import { useLoggedIn } from "../api/routes/login";
import Login from "../components/Login";
import { MiniCart } from "../components/MiniCart";

const Layout: FC = () => {
  const loggedIn: boolean = useLoggedIn();
  useEffect(() => {
    if (loggedIn) {
      getCart();
    }
  }, [loggedIn]);
  return (
    <>
      <Login />
      <MiniCart />
    </>
  );
};

export default Layout;
