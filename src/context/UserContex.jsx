import { createContext, useState } from "react";
import { useEffect } from "react";
export const UserContext = createContext();

export const UserProvidor = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || "");

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }else{
        localStorage.removeItem('user')
    }
  }, [user]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
