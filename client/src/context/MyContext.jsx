import { createContext, useEffect, useState } from "react";

const loginContext = createContext(null);

const ContextProvider = ({ children }) => {
  const presistLogin =
    localStorage.getItem("loginAuth") === "true" ? true : false;
  const [loginAuth, setLoginAuth] = useState(presistLogin);
  useEffect(() => {
    localStorage.setItem("loginAuth", loginAuth);
  }, [loginAuth]);

  return (
    <loginContext.Provider value={{ loginAuth, setLoginAuth }}>
      {children}
    </loginContext.Provider>
  );
};
export { ContextProvider, loginContext };
