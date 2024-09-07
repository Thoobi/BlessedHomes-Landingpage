import { Link } from 'react-router-dom'
import { FaLinkedin, FaFacebookF } from "react-icons/fa";
import { FaYoutube, FaXTwitter } from "react-icons/fa6";
import logo from '../../assets/Logo4.svg'
import mail from '../../assets/mail.svg'
import send from '../../assets/Send.svg'
import background from '../../assets/Lastbg.png'

const Footer = () => {
    const now = new Date()
    const year = now.getFullYear()

    return (
        <div className="font-urbanist w-full border-blue-400 border max-w-screen-2xl mx-auto text-white">
            <div className='w-full bg-[#141414]'>
                <div className='w-[90%] mx-auto border border-green-600 py-[60px] px-[80px] bg-no-repeat bg-cover flex flex-row justify-between items-center' style={{ backgroundImage: `url(${background})` }}>
                    <div className='w-[70%]'>
                        <h2 className='text-[38px] font-semibold'>
                            Start Your Real Estate Journey Today
                        </h2>
                        <p className='text-base font-medium'>
                            Your dream property is just a click away. Whether you&apos;re looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.
                        </p>
                    </div>
                    <button className='text-sm w-[152px] h-[49px] font-normal bg-[#703BF7] rounded-lg'>
                        Explore Properties
                    </button>
                </div>
                <div className='w-[90%] py-20 h-[392px] border border-red-800 mx-auto flex flex-row gap-x-20 items-start'>
                    <div className='flex flex-col gap-y-5 h-[110px] justify-start border-red-500 border'>
                        <img src={logo} className='h-[50px] w-[250px] self-start' alt="The logo" />
                        <div className='flex flex-row justify-center items-center border border-white w-[305px] h-[52px] rounded-lg gap-x-[6px]'>
                            <img src={mail} className='size-5' alt="The mail icon" />
                            <input
                                type="mail"
                                placeholder='Enter your mail'
                                className='bg-transparent border-none outline-none text-white'
                            />
                            <img src={send} className='size-5' alt="" />
                        </div>
                    </div>
                    <div className='flex flex-row w-[875px] justify-between'>
                        <div className='flex flex-col gap-y-6'>
                            <h2 className='text-[#999999] text-lg font-medium'>Home</h2>
                            <div className='text-white text-base font-medium flex flex-col gap-y-4'>
                                <Link>
                                    <p>Hero Section</p>
                                </Link>
                                <Link>
                                    Features
                                </Link>
                                <Link>
                                    Properties
                                </Link>
                                <Link>
                                    Testimonials
                                </Link>
                                <Link>
                                    FAQ&apos;s
                                </Link>
                            </div>
                        </div>
                        <div className='flex flex-col gap-y-6'>
                            <h2 className='text-[#999999] text-lg font-medium'>About-Us</h2>
                            <div className='text-white text-base font-medium flex flex-col gap-y-4'>
                                <Link>
                                    Our Story
                                </Link>
                                <Link>
                                    Our Works
                                </Link>
                                <Link>
                                    How it works
                                </Link>
                                <Link>
                                    Our Teams
                                </Link>
                                <Link>
                                    Our Clients
                                </Link>
                            </div>
                        </div>
                        <div className='flex flex-col gap-y-6'>
                            <h2 className='text-[#999999] text-lg font-medium'>Properties</h2>
                            <div className='text-white text-base font-medium flex flex-col gap-y-4'>
                                <Link>
                                    Portfolio
                                </Link>
                                <Link>
                                    Categories
                                </Link>
                            </div>
                        </div>
                        <div className='flex flex-col gap-y-6'>
                            <h2 className='text-[#999999] text-lg font-medium'>Services</h2>
                            <div className='text-white text-base font-medium flex flex-col gap-y-4'>
                                <Link>
                                    Valuation Mastery
                                </Link>
                                <Link>
                                    Strategic Marketing
                                </Link>
                                <Link>
                                    Negotiation Wizardry
                                </Link>
                                <Link>
                                    Closing Success
                                </Link>
                                <Link>
                                    Property Management
                                </Link>
                            </div>
                        </div>
                        <div className='flex flex-col gap-y-6'>
                            <h2 className='text-[#999999] text-lg font-medium'>Contact-Us</h2>
                            <div className='text-white text-base font-medium flex flex-col gap-y-4'>
                                <Link>
                                    Contact Form
                                </Link>
                                <Link>
                                    Our Offices
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#1f1f1f] w-full h-[68px] flex flex-row justify-between items-center'>
                <div className='flex flex-row justify-between items-center w-[90%] mx-auto'>
                    <span className='flex flex-row gap-x-5'>
                        <p className='text-white text-sm font-medium'>
                            &copy; {year} Blessed Homes and Properties. All Rights Reserved
                        </p>
                        <p className='text-white text-sm font-medium'>
                            Terms & Conditions
                        </p>
                    </span>
                    <span className='flex flex-row gap-x-2'>
                        <Link className='size-10 bg-[#141414] rounded-full flex justify-center items-center'>
                            <FaFacebookF className='text-white size-5' />
                        </Link>
                        <Link className='size-10 bg-[#141414] rounded-full flex justify-center items-center'>
                            <FaLinkedin className='text-white size-5' />
                        </Link>
                        <Link className='size-10 bg-[#141414] rounded-full flex justify-center items-center'>
                            <FaXTwitter className='text-white size-5' />
                        </Link>
                        <Link className='size-10 bg-[#141414] rounded-full flex justify-center items-center'>
                            <FaYoutube className='text-white size-5' />
                        </Link>
                    </span>
                </div>

            </div>
        </div>
    )
}

export default Footer