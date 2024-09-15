import abstract from "../../assets/Abstractdesign.svg"
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import contentArray from "../../utils/content";

const Property = () => {
    let sliderRef3 = useRef(null);

    const next3 = () => {
        sliderRef3.slickNext();
    };
    const previous3 = () => {
        sliderRef3.slickPrev();
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
        <div id="property" className='w-[90%] mx-auto'>
            <div className='mt-[100px] w-[5%] max-lg:w-[20%] max-lg:mt-[60px]'>
                <img src={abstract} alt="" />
            </div>
            <div className='flex flex-col gap-[60px]'>
                <div className='w-full flex flex-row justify-between'>
                    <div className='w-[60%] flex flex-col gap-[10px] max-lg:w-full'>
                        <h2 className='text-[38px] font-semibold max-lg:text-[28px]'>Featured Properties</h2>
                        <p className='text-base font-medium max-lg:text-[#999999] max-lg:text-sm'>
                            Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Blessed Homes and Properties. Click &apos;&apos;View Details&apos;&apos; for more information.
                        </p>
                    </div>
                    <button className='bg-[#1A1A1A] h-[49px] w-[155px] border border-[#262626] self-end rounded-lg text-base font-medium max-lg:hidden'>
                        View All Properties
                    </button>
                </div>
                <div className='border border-[#262626] rounded-xl'>
                    <Slider ref={slider => {
                        sliderRef3 = slider;
                    }} {...settings}>
                        {contentArray.map((items, index) => (
                            <div key={index} className='w-[300px] my-10 p-[30px] border border-[#262626] bg-[#141414] rounded-xl max-lg:p-5'>
                                <div className='mb-5'>
                                    <img src={items.image} alt="" className='max-lg:rounded-[10px] w-full h-80 rounded-lg object-center' />
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <h2 className='text-[20px] font-semibold'>
                                        {items.title}
                                    </h2>
                                    <div className="w-full h-40 ">
                                        <p className="text-base font-medium text-[#999999]">
                                            {items.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <div className='w-full flex flex-row justify-end items-center p-5 gap-5 h-[60px] border border-[#262626] rounded-xl'>
                        <button className="button" onClick={previous3}>
                            <BsArrowLeftCircle className='size-[30px]' />
                        </button>
                        <button className="button" onClick={next3}>
                            <BsArrowRightCircle className='size-[30px]' />
                        </button>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Property