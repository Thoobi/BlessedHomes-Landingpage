import { Link } from 'react-router-dom'
import { useRef } from "react";
import heroImg from '../assets/Container.jpg'
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

const Home = () => {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
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
        arrows: false
    };

    return (
        <div className='font-urbanist w-full bg-[#141414] max-w-screen-2xl mx-auto text-white'>
            <div className='flex flex-row justify-center gap-x-[60px] border-red-400 border w-[90%] mx-auto'>
                <div className='border-blue-500 border w-[50%] flex flex-col gap-[50px] '>
                    <div className='w-full border-green-400 border flex flex-col gap-5'>
                        <h1 className='text-[46px] mt-[60px] font-semibold border-green-400 border leading-[120%]'>
                            Discover Your Dream Property with Blessed Homes and properties
                        </h1>
                        <p className='border-green-400 border text-base text-[#999999]'>
                            Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
                        </p>
                    </div>
                    <div className='border-green-400 border flex flex-row gap-4'>
                        <button className='border border-[#262626] w-[111px] h-[49px] rounded-lg text-sm font-medium'>
                            Learn More
                        </button>
                        <button className='w-[151px] h-[49px] rounded-lg bg-[#703BF7] text-sm font-medium'>
                            Browse Properties
                        </button>
                    </div>
                    <div className='border-green-400 border flex flex-row gap-4 w-full'>
                        <div className='w-[192px] h-[99px] bg-[#1A1A1A] py-[14px] px-5 rounded-[10px] border border-[#262626]'>
                            <h1 className='text-3xl font-bold'>200+</h1>
                            <p className='text-base font-medium text-[#999999]'>Happy Customers</p>
                        </div>
                        <div className='w-[192px] h-[99px] bg-[#1A1A1A] py-[14px] px-5 rounded-[10px] border border-[#262626]'>
                            <h1 className='text-3xl font-bold'>10k+</h1>
                            <p>Properties for Clients</p>
                        </div>
                        <div className='w-[192px] h-[99px] bg-[#1A1A1A] py-[14px] px-5 rounded-[10px] border border-[#262626]'>
                            <h1 className='text-3xl font-bold'>5+</h1>
                            <p>Years of Experience</p>
                        </div>
                    </div>
                </div>
                <div className='w-[50%]'>
                    <div className='border-green-400 border h-full w-full'>
                        <img src={heroImg} alt="" className='h-full w-full' />
                    </div>
                </div>
            </div>
            <div className='border-green-400 border flex flex-row w-full h-[180px] py-[10px] gap-[10px] justify-center'>
                <div className='relative w-[347px] h-[160px] bg-[#1A1A1A] py-[14px] px-4 rounded-[10px] border border-[#262626] flex flex-col justify-center items-center gap-4'>
                    <Link>
                        <BsArrowUpRight className='text-[#4D4D4D] size-[24px] absolute top-3 right-3' />
                    </Link>
                    <img src={moneyicon} alt="" className='size-[60px]' />
                    <p className='text-base font-semibold text-white'>Unlock Property Value</p>
                </div>
                <div className='relative w-[347px] h-[160px] bg-[#1A1A1A] py-[14px] px-4 rounded-[10px] border border-[#262626] flex flex-col justify-center items-center gap-4'>
                    <Link>
                        <BsArrowUpRight className='text-[#4D4D4D] size-[24px] absolute top-3 right-3' />
                    </Link>
                    <img src={storeicon} alt="" className='size-[60px]' />
                    <p className='text-base font-semibold text-white'>Find Your Dream Home</p>
                </div>
                <div className='relative w-[347px] h-[160px] bg-[#1A1A1A] py-[14px] px-4 rounded-[10px] border border-[#262626] flex flex-col justify-center items-center gap-4'>
                    <Link>
                        <BsArrowUpRight className='text-[#4D4D4D] size-[24px] absolute top-3 right-3' />
                    </Link>
                    <img src={houseicon} alt="" className='size-[60px]' />
                    <p className='text-base font-semibold text-white'>Effortless Property Mangement</p>
                </div>
                <div className='relative w-[347px] h-[160px] bg-[#1A1A1A] py-[14px] px-4 rounded-[10px] border border-[#262626] flex flex-col justify-center items-center gap-4'>
                    <Link>
                        <BsArrowUpRight className='text-[#4D4D4D] size-[24px] absolute top-3 right-3' />
                    </Link>
                    <img src={brighticon} alt="" className='size-[60px]' />
                    <p className='text-base font-semibold text-white'>Smart Investments. Informed Decision</p>
                </div>
            </div>

            <div className='w-[90%] mx-auto border border-red-500'>
                <div className='border border-white mt-[100px] w-[5%]'>
                    <img src={abstract} alt="" />
                </div>
                <div className='flex flex-col gap-[60px]'>
                    <div className='border border-green-500 w-full flex flex-row justify-between'>
                        <div className='border border-green-700 w-[60%] flex flex-col gap-[10px]'>
                            <h2 className='text-[38px] font-semibold border border-green-300'>Featured Properties</h2>
                            <p className='text-base font-medium border border-green-300'>
                                Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click &apos;&apos;View Details&apos;&apos; for more information.
                            </p>
                        </div>
                        <button className='bg-[#1A1A1A] h-[49px] w-[155px] border border-[#262626] self-end rounded-lg text-base font-medium'>
                            View All Properties
                        </button>
                    </div>
                    <div className='border border-white'>
                        <Slider ref={slider => {
                            sliderRef = slider;
                        }} {...settings}>
                            <div className='w-[300px] my-10 p-[30px] border border-[#262626] bg-[#141414] rounded-xl'>
                                <div>
                                    <img src={heroImg} alt="" />
                                </div>
                                <div>
                                    <h2>
                                        Seaside Serenity Villa
                                    </h2>
                                    <p>
                                        A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...
                                    </p>
                                </div>
                            </div>

                            <div className='my-10 p-[30px] border border-[#262626] bg-[#141414] rounded-xl'>
                                <img src={heroImg} alt="" />
                            </div>

                            <div className='my-10 p-[30px] border border-[#262626] bg-[#141414] rounded-xl'>
                                <img src={heroImg} alt="" />
                            </div>

                            <div className='my-10 p-[30px] border border-[#262626] bg-[#141414] rounded-xl'>
                                <img src={heroImg} alt="" />
                            </div>
                        </Slider>
                        <div className='w-full flex flex-row justify-end p-5 gap-5 h-[60px] border border-[#262626]'>
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

            <div className='w-[90%] mx-auto border border-red-500'>
                <div className='border border-white mt-[100px] w-[5%]'>
                    <img src={abstract} alt="" />
                </div>
                <div className='flex flex-col gap-[60px]'>
                    <div className='border border-green-500 w-full flex flex-row justify-between'>
                        <div className='border border-green-700 w-full flex flex-col gap-[10px]'>
                            <h2 className='text-[38px] font-semibold border border-green-300'>What Our Clients Say</h2>
                            <p className='text-base font-medium border border-green-300'>
                                Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.
                            </p>
                        </div>
                        <button className='bg-[#1A1A1A] h-[49px] w-[155px] border border-[#262626] self-end rounded-lg text-base font-medium'>
                            View All Testimonials
                        </button>
                    </div>
                    <div className='w-full border border-white'>
                        <Slider {...settings} ref={slider => {
                            sliderRef = slider;
                        }}
                        >
                            <div className='w-[300px] h-[550px] my-10 p-[30px] border border-[#262626] bg-[#141414] rounded-xl'>
                                <div>
                                    <img src={heroImg} alt="" />
                                </div>
                                <div>
                                    <h2>
                                        Seaside Serenity Villa
                                    </h2>
                                    <p>
                                        A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...
                                    </p>
                                </div>
                            </div>

                            <div className='w-[300px] h-[550px] my-10 p-[30px] border border-[#262626] bg-[#141414] rounded-xl'>
                                <img src={heroImg} alt="" />
                            </div>

                            <div className='w-[300px] h-[550px] my-10 p-[30px] border border-[#262626] bg-[#141414] rounded-xl'>
                                <img src={heroImg} alt="" />
                            </div>

                            <div className='w-[300px] h-[550px] my-10 p-[30px] border border-[#262626] bg-[#141414] rounded-xl'>
                                <img src={heroImg} alt="" />
                            </div>
                        </Slider>
                        <div className='w-full flex flex-row justify-end p-5 gap-5 h-[60px] border border-[#262626]'>
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

            <div className='w-[90%] mx-auto border border-red-500'>
                <div className='border border-white mt-[100px] w-[5%]'>
                    <img src={abstract} alt="" />
                </div>
                <div className='flex flex-col gap-[60px]'>
                    <div className='border border-green-500 w-full flex flex-row justify-between'>
                        <div className='border border-green-700 w-[75%] flex flex-col gap-[10px]'>
                            <h2 className='text-[38px] font-semibold border border-green-300'>Frequently Asked Questions</h2>
                            <p className='text-base font-medium border border-green-300'>
                                Find answers to common questions about Estatein &apos;s services, property listings, and the real estate process. We&apos;re here to provide clarity and assist you every step of the way.
                            </p>
                        </div>
                        <button className='bg-[#1A1A1A] h-[49px] w-[155px] border border-[#262626] self-end rounded-lg text-base font-medium'>
                            View All properties
                        </button>
                    </div>
                    <div className='w-full border border-white'>
                        <Slider {...settings} ref={slider => {
                            sliderRef = slider;
                        }}>
                            <div className='w-[300px] h-[550px] my-10 p-[30px] border border-[#262626] bg-[#141414] rounded-xl'>
                                <div>
                                    <img src={heroImg} alt="" />
                                </div>
                                <div>
                                    <h2>
                                        Seaside Serenity Villa
                                    </h2>
                                    <p>
                                        A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...
                                    </p>
                                </div>
                            </div>

                            <div className='w-[300px] h-[550px] my-10 p-[30px] border border-[#262626] bg-[#141414] rounded-xl'>
                                <img src={heroImg} alt="" />
                            </div>

                            <div className='w-[300px] h-[550px] my-10 p-[30px] border border-[#262626] bg-[#141414] rounded-xl'>
                                <img src={heroImg} alt="" />
                            </div>

                            <div className='w-[300px] h-[550px] my-10 p-[30px] border border-[#262626] bg-[#141414] rounded-xl'>
                                <img src={heroImg} alt="" />
                            </div>
                        </Slider>
                        <div className='w-full flex flex-row justify-end p-5 gap-5 h-[60px] border border-[#262626]'>
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
        </div >
    )
}

export default Home