"use client"
import { createContext, useContext, useState } from "react"
const Mycontext = createContext({})
export const useMycontext = () => {
    return useContext(Mycontext)
}

const DropdownContex = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false)
    // const [isDialogueshow, setisDialogueshow] = useState(false);
    const handleClick = () => {
        setShowMenu(!showMenu)
    }

    const handleFocus = () => {
        setShowMenu(true);
    };

    const handleBlur = () => {
        setShowMenu(false);
    };

    return (
        <Mycontext.Provider value={{ showMenu, handleClick,handleBlur,handleFocus,setShowMenu}}>
            {children}
        </Mycontext.Provider>
    )
}

export default DropdownContex