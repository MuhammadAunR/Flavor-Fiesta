import { X } from 'lucide-react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { sidebarContext } from './SidebarContext'

const AsideNavbar = () => {
    const { isSidebarOpen, toggleSidebar } = useContext(sidebarContext)
    return (
        <>
            {isSidebarOpen ? <div className='w-full h-screen bg-black/30 backdrop-blur-sm absolute z-50'></div> : ""}
            <aside className={`bg-(--color-bg) transition-transform duration-300 ease-in-out transform fixed z-50 h-screen w-96 pt-42 top-0 left-0 px-10 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <span onClick={toggleSidebar} className='absolute top-7 right-7 transform hover:rotate-90 transition-transform cursor-pointer bg-black/15 rounded-full'>
                    <X size={30} />
                </span>
                <div className="logo py-10">
                    <Link to={'/'} className='cursor-pointer'>
                        <h2 style={{ fontFamily: "'Story Script', cursive" }} className='text-4xl font-bold text-(--color-text)'>FlavorFiesta<span className='text-(--color-primary)'>.</span></h2>
                    </Link>
                </div>

                <ul className='flex flex-col items-start justify-center gap-5 text-lg font-semibold'>
                    <li className='ring-2 ring-transparent hover:translate-x-4 hover:tracking-widest transition-all ease-linear cursor-pointer rounded-full px-3 py-1'>Home</li>
                    <li className='ring-2 ring-transparent hover:translate-x-4 hover:tracking-widest transition-all ease-linear cursor-pointer rounded-full px-3 py-1'>Recipes</li>
                    <li className='ring-2 ring-transparent hover:translate-x-4 hover:tracking-widest transition-all ease-linear cursor-pointer rounded-full px-3 py-1'>Blog</li>
                    <li className='ring-2 ring-transparent hover:translate-x-4 hover:tracking-widest transition-all ease-linear cursor-pointer rounded-full px-3 py-1'>Contact</li>
                    <li className='ring-2 ring-transparent hover:translate-x-4 hover:tracking-widest transition-all ease-linear cursor-pointer rounded-full px-3 py-1'>About</li>
                </ul>
            </aside>

        </>
    )
}

export default AsideNavbar
