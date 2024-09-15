import { Outlet } from "react-router-dom"
import Footer from '../static/Footer'

const Layout = () => {
    return (
        <div className="w-full">
            <Outlet />
            <Footer />
        </div>

    )
}

export default Layout