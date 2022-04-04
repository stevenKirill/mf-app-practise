import { API_SERVER } from "home/services";
import { useEffect, useState } from "react";
import { ReqLogin } from "../../../types";
import { jwt } from "../../consts";

export const login = (userData: ReqLogin) => {
  fetch(`${API_SERVER}/auth/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data?.statusCode === 401) {
        throw new Error(JSON.stringify(data));
      }
      jwt.next(data.access_token);
      return data.access_token;
    })
    .catch((err) => console.error(err));
};

export const useLoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState(!!jwt.value);
  useEffect(() => {
    setLoggedIn(!!jwt.value);
    jwt.subscribe((c) => {
      setLoggedIn(!!jwt.value)
    });
  }, []);
  return loggedIn;
};
