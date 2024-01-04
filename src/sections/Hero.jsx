import { FaAngleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import { Hero_Slider_1, Hero_Slider_2, Hero_Slider_3 } from "../assets";
import { Link } from "react-router-dom";

const SliderDb = [
  {
    name: "NAMPHONE",
    leftText: "NEW",
    rightText: "RELEASE THIS FALL",
    img: Hero_Slider_1,
    link: "#",
    bg: "#CAF6F9",
    buttonColor:'#DB4444',
    id:88283
  },
  {
    name: "PLAYBOX",
    leftText: "NEW",
    rightText: "CONSOLE X245-HD",
    img: Hero_Slider_2,
    link: "#",
    buttonColor:'#DB4444',
    bg: "#319DFF",
    id:82398298
  },
  {
    name: "GADGETS",
    leftText: "NEW",
    rightText: "KEEP YOUR SHAPE WITH ALL",
    img: Hero_Slider_3,
    link: "#",
    buttonColor:'#2CDAE6',
    bg: "#FFCBD9",
    id:90099232
  },
];

const Hero = () => {
  return (
    <div id="hero" className="myContainer pt-6 flex gap-x-5 ">
      <section className="w-full max-w-[180px] h-[344px] border-r-2 border-gray-500 flex flex-col gap-y-[12px]  ">
        <li className="flex items-center justify-between w-full max-w-[157px]">
          <a href="">Woman’s Fashion</a> <FaAngleRight />
        </li>
        <li className="flex items-center justify-between w-full max-w-[157px]">
          <a href="">Men’s Fashion</a> <FaAngleRight />
        </li>
        <li className="flex items-center justify-between w-full max-w-[157px]">
          <a href="">Electronics</a> <FaAngleRight />
        </li>
        <li className="flex items-center justify-between w-full max-w-[157px]">
          <a href="">Home & Lifestyle</a> <FaAngleRight />
        </li>
        <li className="flex items-center justify-between w-full max-w-[157px]">
          <a href="">Medicine</a> <FaAngleRight />
        </li>
        <li className="flex items-center justify-between w-full max-w-[157px]">
          <a href="">Sports & Outdoor</a> <FaAngleRight />
        </li>
        <li className="flex items-center justify-between w-full max-w-[157px]">
          <a href="">Baby’s & Toys</a> <FaAngleRight />
        </li>
        <li className="flex items-center justify-between w-full max-w-[157px]">
          <a href="">Groceries & Pets</a> <FaAngleRight />
        </li>
        <li className="flex items-center justify-between w-full max-w-[157px]">
          <a href="">Health & Beauty</a> <FaAngleRight />
        </li>
      </section>
      <section className="bg-slate-400 w-full h-[344px] max-w-[80%] ">
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {SliderDb.map((product) => {
            const { bg,buttonColor, name, leftText, rightText, img,id, link} = product
            return (
              <SwiperSlide
                style={{background: `${bg}`}}
                className={` flex heroSlider items-center pb-11 justify-around`}
                key={id}
              >
                <div>
                  <h1 className={`w-full max-w-[500px] text-[36px] font-light leading-normal`}>
                    {leftText}
                    <p className="font-bold">{name}</p>
                    {rightText}
                  </h1>
                  <Link
                    style={{background: `${buttonColor}`}}
                    to={link}
                    className="text-[16px] font-medium text-white flex items-center justify-center w-full max-w-[136px] h-12 mt-10 rounded-3xl"
                  >
                    Find Out More
                  </Link>
                </div>
                <img src={img} className="w-[500px] h-[303px]" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
};

export default Hero;
