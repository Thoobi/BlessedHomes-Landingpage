import { Outlet } from "react-router-dom"
import Header from '../static/Header'
import Footer from '../static/Footer'

const Layout = () => {
    return (
        <div className="w-full">
            <Header />
            <Outlet />
            <Footer />
        </div>

    )
}

export default Layout