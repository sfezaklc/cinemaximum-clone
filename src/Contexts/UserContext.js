import { createContext } from "react";
import { useEffect, useState } from "react"

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const values = {
        user,
        setUser
      }
      return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}
export default UserProvider