import { createContext } from "react";
import { useState } from "react"

export const ChairContext = createContext();

const ChairProvider = ({ children }) => {
    const [chair, setChair] = useState([])
    const [selectedChair, setSelectedChair] = useState([])
    const values = {
        chair,
        setChair,
        selectedChair,
        setSelectedChair
    }
    return <ChairContext.Provider value={values}>{children}</ChairContext.Provider>
}
export default ChairProvider