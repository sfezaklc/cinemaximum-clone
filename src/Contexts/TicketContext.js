import { createContext} from "react";
import { useState } from "react"

export const TicketContext = createContext();

const TicketProvider = ({ children }) => {
const [price, setPrice] = useState(0)
const [count, setCount] = useState(0)
const [studentCount, setStudentCount] = useState(0)
const [adultCount, setAdultCount] = useState(0)

const values = {
    price,
    setPrice,
    count,
    setCount,
    studentCount,
    setStudentCount,
    adultCount,
    setAdultCount
  }
  return <TicketContext.Provider value={values}>{children}</TicketContext.Provider>
}
export default TicketProvider