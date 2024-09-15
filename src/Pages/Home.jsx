import { Link } from 'react-router-dom'
import logo from "../assets/logo3.svg"
import ham from '../assets/hanburger.svg'
import { RxCross2 } from "react-icons/rx";
import { useRef, useState } from "react";
import heroImg from '../assets/Container.jpg'
import star from '../assets/star.svg'
import moneyicon from '../assets/money.svg'
import storeicon from '../assets/store.svg'
import brighticon from '../assets/bright.svg'
import houseicon from '../assets/housing.svg'
import { BsArrowUpRight } from "react-icons/bs"
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import abstract from '../assets/Abstractdesign.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Property from '../Components/static/Property';

const Home = () => {
    const [isOpen, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!isOpen)
    }
    let sliderRef = useRef(null);

    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    let sliderRef2 = useRef(null);

    const next1 = () => {
        sliderRef2.slickNext();
    };
    const previous1 = () => {
        sliderRef2.slickPrev();
    };

    let settings = {
        dots: false,
        infinite: true,
        innerWidth: "300px",
        padding: "60px",
        margin: "70px",
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='bg-[#141414] '>
            <div className="font-urbanist w-full sticky border-red-500 top-0 bg-white z-10 text-white max-w-screen-2xl mx-auto mb-5 max-lg:mb-3">
                <div className='h-[77px] bg-white text-black flex items-center justify-between w-[full] max-lg:w-full max-lg:h-[69px]'>
                    <div className='flex items-center justify-between w-[90%] mx-auto max-lg:hidden'>
                        <div>
                            <img src={logo} alt="the logo" />
                        </div>
                        <div className='flex flex-row justify-center items-center gap-x-6 text-base font-medium '>
                            <a href={"#"} className={({ isActive }) =>
                                isActive ? "border-b-[2px] border-b-black" : "hover:border-b-[2px] hover:border-b-black"
                            }>
                                Home
                            </a>
                            <a href={"#about-us"} className={({ isActive }) =>
                                isActive ? "border-b-[2px] border-b-black" : "hover:border-b-[2px] hover:border-b-black"
                            }>
                                About-Us
                            </a>
                            <a href={"#property"} className={({ isActive }) =>
                                isActive ? "border-b-[2px] border-b-white" : "hover:border-b-[2px] hover:border-b-black"
                            }>
                                Properties
                            </a>
                            <a href={"#faqs"} className={({ isActive }) =>
                                isActive ? "border-b-[2px] border-b-white" : "hover:border-b-[2px] hover:border-b-black"
                            }>
                                FAQS
                            </a>
                        </div>
                        <button className="bg-[#141414] text-white px-3 py-2 border border-[#262626] rounded-lg text-sm font-medium hover:bg-[#262626]">
                            <a href={"/footer"}>
                                Contact Us
                            </a>
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
                    <a href="#" className={({ isActive }) =>
                        isActive ? "border-b-[2px] border-b-white" : ""
                    }>
                        Home
                    </a>
                    <a href="#about-us" className={({ isActive }) =>
                        isActive ? "border-b-[2px] border-b-white" : ""
                    }>
                        About-Us
                    </a>
                    <a href="#property" className={
                        "hover:border-b-[2px] hover:border-b-black"
                    }>
                        Properties
                    </a>
                    <a href="#faqs" className={
                        "hover:border-b-[2px] hover:border-b-black"
                    }>
                        FAQS
                    </a>
                </div>
            </div>

            <div className='font-urbanist w-full bg-[#141414] max-w-screen-2xl mx-auto text-white'>
                <div className='flex flex-row justify-center gap-x-[60px] w-[90%] mx-auto max-lg:flex-col-reverse'>
                    <div className='w-[50%] flex flex-col gap-[50px] my-auto max-lg:w-full'>
                        <div className='w-full flex flex-col gap-5'>
                            <h1 className='text-[46px] font-semibold max-lg:text-[28px] leading-[120%] max-lg:mt-10'>
                                Discover Your Dream Property with Blessed Homes and properties
                            </h1>
                            <p className='text-base text-[#999999] max-lg:text-sm'>
                                Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
                            </p>
                        </div>
                        <div className='flex flex-row gap-4 max-lg:flex-col'>
                            <button className='border border-[#262626] w-[111px] h-[49px] rounded-lg text-sm font-medium max-lg:w-full'>
                                Learn More
                            </button>
                            <button className='w-[151px] h-[49px] rounded-lg bg-[#703BF7] text-sm font-medium max-lg:w-full'>
                                Browse Properties
                            </button>
                        </div>
                        <div className='flex flex-row gap-4 w-full max-lg:grid  justify-center items-center mx-auto'>
                            <div className='w-[192px] h-[99px] max-lg:w-[152px] bg-[#1A1A1A] py-[14px] px-5 rounded-[10px] border border-[#262626]'>
                                <h1 className='text-3xl font-bold'>200+</h1>
                                <p className='text-base font-medium text-[#999999] max-lg:text-sm'>Happy Customers</p>
                            </div>
                            <div className='w-[192px] h-[99px] max-lg:w-[152px] bg-[#1A1A1A] py-[14px] px-5 rounded-[10px] border border-[#262626] max-lg:text-center'>
                                <h1 className='text-3xl font-bold'>10k+</h1>
                                <p className='max-lg:text-sm text-[#999999]'>Properties for Clients</p>
                            </div>
                            <div className='w-[192px] h-[99px] bg-[#1A1A1A] py-[14px] px-5 rounded-[10px] border border-[#262626]  max-lg:col-span-2 max-lg:w-full text-center'>
                                <h1 className='text-3xl font-bold'>5+</h1>
                                <p className='text-[#999999] max-lg:text-sm '>Years of Experience</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[50%] max-lg:w-full max-lg:h-[302px] max-lg:mt-10'>
                        <img src={heroImg} alt="" className='h-full w-full rounded-xl' />
                    </div>
                </div>
                <div className='flex flex-row w-full lg:h-[180px] py-[10px] gap-[10px] max-lg:grid max-lg:grid-cols-2 max-lg:justify-center max-lg:items-center justify-center items-center max-lg:w-[90%] mx-auto max-lg:mt-10'>
                    <div className='relative w-[347px] h-[160px] bg-[#1A1A1A] py-[14px] px-4 rounded-[10px] border border-[#262626] flex flex-col justify-center items-center gap-4 max-lg:w-[164px] max-lg:h-[144px] max-lg:text-center'>
                        <Link>
                            <BsArrowUpRight className='text-[#4D4D4D] size-[24px] absolute top-3 right-3' />
                        </Link>
                        <img src={moneyicon} alt="" className='size-[60px]' />
                        <p className='text-base font-semibold text-white'>Unlock Property Value</p>
                    </div>
                    <div className='relative w-[347px] h-[160px] bg-[#1A1A1A] py-[14px] px-4 rounded-[10px] border border-[#262626] flex flex-col justify-center items-center gap-4 max-lg:w-[164px] max-lg:h-[144px] max-lg:text-center'>
                        <Link>
                            <BsArrowUpRight className='text-[#4D4D4D] size-[24px] absolute top-3 right-3' />
                        </Link>
                        <img src={storeicon} alt="" className='size-[60px]' />
                        <p className='text-base font-semibold text-white max-lg:text-sm'>Find Your Dream Home</p>
                    </div>
                    <div className='relative w-[347px] h-[160px] bg-[#1A1A1A] py-[14px] px-4 rounded-[10px] border border-[#262626] flex flex-col justify-center items-center gap-4 max-lg:w-[164px] max-lg:h-[144px] max-lg:text-center'>
                        <Link>
                            <BsArrowUpRight className='text-[#4D4D4D] size-[24px] absolute top-3 right-3' />
                        </Link>
                        <img src={houseicon} alt="" className='size-[60px]' />
                        <p className='text-base font-semibold text-white max-lg:text-sm'>Effortless Property Mangement</p>
                    </div>
                    <div className='relative w-[347px] h-[160px] bg-[#1A1A1A] py-[14px] px-4 rounded-[10px] border border-[#262626] flex flex-col justify-center items-center gap-4 max-lg:w-[164px] max-lg:h-[144px] max-lg:text-center'>
                        <Link>
                            <BsArrowUpRight className='text-[#4D4D4D] size-[24px] absolute top-3 right-3' />
                        </Link>
                        <img src={brighticon} alt="" className='size-[60px]' />
                        <p className='text-base font-semibold text-white max-lg:text-sm'>Smart Investments. Informed Decision</p>
                    </div>
                </div>

                <Property />

                <div id="about-us" className='w-[90%] mx-auto'>
                    <div className='mt-[100px] w-[5%] max-lg:w-[20%] max-lg:mt-10'>
                        <img src={abstract} alt="" />
                    </div>
                    <div className='flex flex-col gap-[60px]'>
                        <div className='w-full flex flex-row justify-between max-lg:w-full'>
                            <div className='w-[90%] max-lg:w-full flex flex-col gap-[10px]'>
                                <h2 className='text-[38px] font-semibold  max-lg:text-[28px]'>What Our Clients Say</h2>
                                <p className='text-base font-medium max-lg:text-[#999999] max-lg:text-sm'>
                                    Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Blessed Homes and Properties for their real estate needs.
                                </p>
                            </div>
                            <button className='bg-[#1A1A1A] h-[49px] w-[155px] border border-[#262626] self-end rounded-lg text-base font-medium max-lg:hidden'>
                                View All Testimonials
                            </button>
                        </div>
                        <div className='w-full border border-[#262626] rounded-xl'>
                            <Slider {...settings} ref={slider => {
                                sliderRef2 = slider;
                            }}
                            >
                                <div className='w-[300px] my-10 p-[30px] border border-[#262626] bg-[#141414] rounded-xl flex flex-col'>
                                    <div className='w-[90%] mx-auto mb-5'>
                                        <img src={star} alt="" />
                                    </div>
                                    <div className='w-[90%] mx-auto flex flex-col gap-4'>
                                        <h2 className='max-lg:font-semibold max-lg:text-[18px]'>
                                            Exceptional Service
                                        </h2>
                                        <p className='max-lg:text-sm max-lg:font-medium'>
                                            Our experience with Blessed Homes and Properties was outstanding. Their team&apos;s dedication and professionalism made finding our dream home a breeze. Highly recommended!
                                        </p>
                                    </div>
                                    <div>
                                        <img src="" alt="" />
                                        <div>
                                            <h3></h3>
                                            <h3></h3>
                                        </div>
                                    </div>
                                </div>

                                <div className='w-[300px] my-10 p-[30px] border border-[#262626] bg-[#141414] rounded-xl'>
                                    <div className='w-[90%] mx-auto mb-5'>
                                        <img src={star} alt="" />
                                    </div>
                                    <div className='w-[90%] mx-auto flex flex-col gap-4'>
                                        <h2 className='max-lg:font-semibold max-lg:text-[18px]'>
                                            Efficient and Reliable
                                        </h2>
                                        <p className='max-lg:text-sm max-lg:font-medium'>
                                            Blessed Homes and Properties provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn&apos;t be happier with the results.
                                        </p>
                                    </div>
                                    <div>
                                        <img src="" alt="" />
                                        <div>
                                            <h3></h3>
                                            <h3></h3>
                                        </div>
                                    </div>
                                </div>

                                <div className='w-[300px] my-10 p-[30px] border border-[#262626] bg-[#141414] rounded-xl'>
                                    <div className='w-[90%] mx-auto mb-5'>
                                        <img src={star} alt="" />
                                    </div>
                                    <div className='w-[90%] mx-auto flex flex-col gap-4'>
                                        <h2 className='max-lg:font-semibold max-lg:text-[18px]'>
                                            Trusted Advisors
                                        </h2>
                                        <p className='max-lg:text-sm max-lg:font-medium'>
                                            The team at Blessed Homes and Properties guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!
                                        </p>
                                    </div>
                                    <div>
                                        <img src="" alt="" />
                                        <div>
                                            <h3></h3>
                                            <h3></h3>
                                        </div>
                                    </div>
                                </div>

                                <div className='w-[300px] my-10 p-[30px] border border-[#262626] bg-[#141414] rounded-xl'>
                                    <div className='w-[90%] mx-auto mb-5'>
                                        <img src={star} alt="" />
                                    </div>
                                    <div className='w-[90%] mx-auto flex flex-col gap-4'>
                                        <h2 className='max-lg:font-semibold max-lg:text-[18px]'>
                                            Easy and Fast
                                        </h2>
                                        <p className='max-lg:text-sm max-lg:font-medium'>
                                            Blessed Homes and Properties is the best real estate firm. They made buying our home easy.
                                        </p>
                                    </div>
                                    <div>
                                        <img src="" alt="" />
                                        <div>
                                            <h3></h3>
                                            <h3></h3>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            <div className='w-full flex flex-row justify-end items-center p-5 gap-5 h-[60px] border border-[#262626] rounded-xl'>
                                <button className="button" onClick={previous1}>
                                    <BsArrowLeftCircle className='size-[30px]' />
                                </button>
                                <button className="button" onClick={next1}>
                                    <BsArrowRightCircle className='size-[30px]' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="faqs">
                    <div className='w-[90%] mx-auto'>
                        <div className='mt-[100px] w-[5%] max-lg:w-[20%] max-lg:mt-10'>
                            <img src={abstract} alt="" />
                        </div>
                        <div className='flex flex-col gap-[60px]'>
                            <div className='w-full flex flex-row justify-between'>
                                <div className='w-[75%] flex flex-col gap-[10px] max-lg:w-full'>
                                    <h2 className='text-[38px] font-semibold max-lg:text-[28px]'>Frequently Asked Questions</h2>
                                    <p className='text-base font-medium max-lg:text-sm max-lg:text-[#999999]'>
                                        Find answers to common questions about Blessed Homes and Properties &apos;s services, property listings, and the real estate process. We&apos;re here to provide clarity and assist you every step of the way.
                                    </p>
                                </div>
                                <button className='bg-[#1A1A1A] h-[49px] w-[155px] border border-[#262626] self-end rounded-lg text-base font-medium max-lg:hidden'>
                                    View All FAQS
                                </button>
                            </div>
                            <div className='w-full border border-[#262626] rounded-xl'>
                                <Slider {...settings} ref={slider => {
                                    sliderRef = slider;
                                }}>
                                    <div className='w-[300px] my-10 p-[30px] border border-[#262626] bg-[#141414] rounded-xl'>
                                        <div className='flex flex-col gap-5'>
                                            <h2 className='text-[20px] font-semibold'>
                                                How do I search for properties on Blessed Homes and Properties?
                                            </h2>
                                            <p className='text-base font-normal text-[#999999]'>
                                                Learn how to use our user-friendly search tools to find properties that match your criteria.
                                            </p>
                                        </div>
                                    </div>

                                    <div className='w-[300px] my-10 p-[30px] border border-[#262626] bg-[#141414] rounded-xl'>
                                        <div className='flex flex-col gap-5'>
                                            <h2 className='text-[20px] font-semibold'>
                                                What documents do I need to sell my property through Blessed Homes and Properties?
                                            </h2>
                                            <p className='text-base font-normal text-[#999999]'>
                                                Find out about the necessary documentation for listing your property with us.
                                            </p>
                                        </div>
                                    </div>

                                    <div className='w-[300px] my-10 p-[30px] border border-[#262626] bg-[#141414] rounded-xl'>
                                        <div className='flex flex-col gap-5'>
                                            <h2 className='text-[20px] font-semibold'>
                                                How can I contact an Blessed Homes and Properties agent?
                                            </h2>
                                            <p className='text-base font-normal text-[#999999]'>
                                                Discover the different ways you can get in touch with our experienced agents.
                                            </p>
                                        </div>
                                    </div>

                                    <div className='w-[300px] my-10 p-[30px] border border-[#262626] bg-[#141414] rounded-xl'>
                                        <div className='flex flex-col gap-5'>
                                            <h2 className='text-[20px] font-semibold'>
                                                How do I search for properties on Blessed Homes and Properties?
                                            </h2>
                                            <p className='text-base font-normal text-[#999999]'>
                                                A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...
                                            </p>
                                        </div>
                                    </div>
                                </Slider>
                                <div className='w-full flex flex-row justify-end items-center p-5 gap-5 h-[60px] border border-[#262626] rounded-xl'>
                                    <button className="button" onClick={previous}>
                                        <BsArrowLeftCircle className='size-[30px]' />
                                    </button>
                                    <button className="button" onClick={next}>
                                        <BsArrowRightCircle className='size-[30px]' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </div>
    )
}

export default Home