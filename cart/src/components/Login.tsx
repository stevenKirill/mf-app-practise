import React, { useState, SyntheticEvent, FC } from "react";
import { useLoggedIn, login } from "../api/routes/login";
import { ReqLogin } from "../types";

const Login: FC = () => {
  const loggedIn: boolean = useLoggedIn();
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [userData, setUserData] = useState<ReqLogin>({
    username: "",
    password: "",
  });

  const handleChangeValue = (e: SyntheticEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  if (loggedIn) return null;
  return (
    <React.Fragment>
      <span
        style={{ cursor: "pointer" }}
        onClick={() => setShowLogin(!showLogin)}
      >
        <i className="ri-fingerprint-line text-2xl" id="showlogin"></i>
      </span>
      {showLogin && (
        <div
          className="absolute p-5 border-4 border-blue-800 bg-white rounded-xl text-black"
          style={{ width: 300 }}
        >
          <input
            type="text"
            name="username"
            placeholder="User Name"
            value={userData.username}
            onChange={handleChangeValue}
            className="border text-sm border-gray-400 p-2 rounded-md w-full"
          />
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChangeValue}
            className="border text-sm border-gray-400 p-2 rounded-md w-full mt-3"
          />
          <button
            className="bg-green-900 text-white py-2 px-5 rounded-md text-sm mt-5"
            onClick={() => login(userData)}
            id="loginbtn"
          >
            Login
          </button>
        </div>
      )}
    </React.Fragment>
  );
};

export default Login;
