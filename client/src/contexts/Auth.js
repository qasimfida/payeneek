import { createContext, useContext, useEffect, useState } from "react";

const Auth = createContext(null);
const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  useEffect(() => {
    const localtoken = localStorage.getItem("token")
    if (window && localtoken) {
      setToken(localtoken)
    }
  }, [localStorage])
  const state = {
    token,
  }
  return <Auth.Provider value={state}>{children}</Auth.Provider>
}
export const useAuth = () => useContext(Auth)
export default AuthProvider
