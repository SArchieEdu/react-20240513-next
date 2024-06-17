"use client";

import { UserContext } from "@/contexts/user/context";
import { useState } from "react";

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
