import React, { createContext, useContext, useState } from "react";

// Crear contexto de usuario
const UserContext = createContext();

// Proveedor de contexto
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para utilizar el contexto
export const useUser = () => useContext(UserContext);
