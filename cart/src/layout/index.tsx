import React, { useEffect, useState, FC } from "react";
import { jwt } from "../api/consts";
import Login from "../components/Login";

const Layout: FC = () => {
  const [jwtToken, setJwtToken] = useState<string>("");
//   useEffect(() => {
//     login({ username: "maria", password: "123" });
//     jwt.subscribe((value) => setJwtToken(value ?? ""));
//     return () => {
//         jwt.subscribe((value) => setJwtToken(value ?? ""));
//     }
//   }, []);
  return (
    <div>
        <Login />
    </div>
  );
};

export default Layout;
