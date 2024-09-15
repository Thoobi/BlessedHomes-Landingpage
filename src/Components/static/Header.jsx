import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo3.svg'
import ham from '../../assets/hanburger.svg'
import { RxCross2 } from "react-icons/rx";

const Header = () => {
    const [isOpen, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!isOpen)
    }
    return (
        <div className="font-urbanist w-full sticky border-red-500 top-0 bg-white z-10 text-white max-w-screen-2xl mx-auto">
            <div className='h-[77px] bg-white text-black flex items-center justify-between w-[full] max-lg:w-full max-lg:h-[69px]'>
                <div className='flex items-center justify-between w-[90%] mx-auto max-lg:hidden'>
                    <div>
                        <img src={logo} alt="the logo" />
                    </div>
                    <div className='flex flex-row justify-center items-center gap-x-6 text-base font-medium '>
                        <NavLink to={"/"} className={({ isActive }) =>
                            isActive ? "border-b-[2px] border-b-black" : "hover:border-b-[2px] hover:border-b-black"
                        }>
                            Home
                        </NavLink>
                        <NavLink to={"/#property"} className={({ isActive }) =>
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
                <div className=' flex items-center justify-between w-[90%] mx-auto lg:hidden'>
                    <div className='w-[93px] h-[28px] max-lg:w-[150px] max-lg:h-[40px]'>
                        <img src={logo} alt="the logo" />
                    </div>
                    <div className='w-10 h-10 flex justify-center items-center' onClick={handleClick}>
                        {isOpen === false ? (<img src={ham} alt="the hamburger for the mobile screen" />) : (<RxCross2 className='text-black size-6' />)}
                    </div>
                </div>
            </div>
            <div className={`flex flex-col justify-center items-center w-[90%]  mx-auto py-5 px-5 my-5 h-[200px] rounded-xl gap-5 bg-black ${isOpen ? "flex" : "hidden"}`}>
                <NavLink to={"/"} className={({ isActive }) =>
                    isActive ? "border-b-[2px] border-b-white w-[15%]" : ""
                }>
                    Home
                </NavLink>
                <NavLink to={"/About-Us"} className={({ isActive }) =>
                    isActive ? "border-b-[2px] border-b-white" : ""
                }>
                    About-Us
                </NavLink>
                <NavLink to={"/"} className={
                    "hover:border-b-[2px] hover:border-b-black"
                }>
                    Properties
                </NavLink>
                <NavLink to={"/Services"} className={({ isActive }) =>
                    isActive ? "border-b-[2px] border-b-black" : ""
                }>
                    Services
                </NavLink>
            </div>
        </div>
    )
}

export default Header