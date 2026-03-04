import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import SidebarContext from '../components/SidebarContext'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MainLayout = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false
        });
    }, []);
    return (
        <>
            <SidebarContext>
                <Navbar />
                <Outlet />
            </SidebarContext>
        </>
    )
}

export default MainLayout
