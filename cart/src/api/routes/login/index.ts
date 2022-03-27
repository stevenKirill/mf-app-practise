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
  const [loggedIn, seLoggedIn] = useState(!!jwt.value);
  useEffect(() => {
    seLoggedIn(!!jwt.value);
    jwt.subscribe((c) => seLoggedIn(!!jwt.value));
  }, []);
  return loggedIn;
};
