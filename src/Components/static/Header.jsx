import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo3.svg'

const Header = () => {
    return (
        <div className="font-urbanist w-full sticky border-red-500 top-0 bg-white z-10 text-white max-w-screen-2xl mx-auto">
            <div className='h-[77px] bg-white text-black flex items-center justify-between w-[full] '>
                <div className='flex items-center justify-between w-[90%] mx-auto'>
                    <div>
                        <img src={logo} alt="the logo" />
                    </div>
                    <div className='flex flex-row justify-center items-center gap-x-6 text-base font-medium'>
                        <NavLink to={"/"} className={({ isActive }) =>
                            isActive ? "border-b-[2px] border-b-black" : "hover:border-b-[2px] hover:border-b-black"
                        }>
                            Home
                        </NavLink>
                        <NavLink to={"/About-Us"} className={({ isActive }) =>
                            isActive ? "border-b-[2px] border-b-black" : "hover:border-b-[2px] hover:border-b-black"
                        }>
                            About-Us
                        </NavLink>
                        <NavLink to={"/"} className={({ isActive }) =>
                            isActive ? "border-b-[2px] border-b-white" : "hover:border-b-[2px] hover:border-b-black"
                        }>
                            Properties
                        </NavLink>
                        <NavLink to={"/Services"} className={({ isActive }) =>
                            isActive ? "border-b-[2px] border-b-black" : "hover:border-b-[2px] hover:border-b-black"
                        }>
                            Services
                        </NavLink>
                    </div>
                    <button className="bg-[#141414] text-white px-3 py-2 border border-[#262626] rounded-lg text-sm font-medium hover:bg-[#262626]">
                        <Link to={"/Contact-Us"}>
                            Contact Us
                        </Link>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Header