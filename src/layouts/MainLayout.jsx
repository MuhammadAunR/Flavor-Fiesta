import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import SidebarContext from '../components/SidebarContext'

const MainLayout = () => {
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
