import React, { useState } from 'react'
import { createContext } from 'react'

export const sidebarContext = createContext();

const SidebarContext = ({ children }) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev)
    }

    return (
        <sidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
            {children}
        </sidebarContext.Provider>
    )
}

export default SidebarContext
