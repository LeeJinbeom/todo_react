import React from "react";

const LoginContext = React.createContext(false);
export default LoginContext

export function getToken() {
    return  window.localStorage.getItem("token");
}