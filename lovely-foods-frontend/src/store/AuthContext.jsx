import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import GlobalLoader from "../components/ui/Loadings/GlobalLoader";

import { loginAPI, logoutAPI } from "../api/auth";



const AuthContext = React.createContext({
  isLoggedIn: false,
  user: null,
  login: () => {},
  logout: () => {},
  token: null,
});

export default AuthContext;



export const AuthContextProvider = (props) => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  const login = async (username, password) => {
    const res = await loginAPI(username, password);
    if(res === "Error") return false;
    setToken(res.token);
    setUser(res.user);
    setIsLoggedIn(true);
    localStorage.setItem("token", res.token);
    localStorage.setItem("user", JSON.stringify(res.user));
    return true;
  }

  const logout = async () => {
    await logoutAPI();
    setUser(null);
    setToken(null);
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  }

  const getUser = async () => {
    const storedToken = localStorage.getItem("token");
    if(storedToken) {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setToken(storedToken);
      setUser(storedUser);
      setIsLoggedIn(true);
    }
    setIsLoading(false);
  };




  useEffect(() => {
    getUser();
  }, []);




  if(isLoading) return <GlobalLoader />;

  return (
    <AuthContext.Provider value={{ isLoggedIn, token, user, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}
