import { FaAngleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';
import { product1, product10, product11, product12, product13, product14, product15, product16, product2, product3, product4, product5, product6, product7, product8, product9, star } from "../assets";

const productDb = [
  { id: 1, img: product1,nowPrice:120, oldPrice:160, rate: [star,star,star,star],discount:50 },
  { id: 2, img: product2,nowPrice:140, oldPrice:180, rate: [star,star,star,star ,star],discount:40},
  { id: 3, img: product3,nowPrice:120, oldPrice:160, rate: [star,star,star],discount:45 },
  { id: 4, img: product4, nowPrice:120, oldPrice:160, rate:[star,star,star,star], discount:30 },
  { id: 5, img: product5,nowPrice:120, oldPrice:160, rate:[star,star,star,star, star], discount:26 },
  { id: 6, img: product6,nowPrice:120, oldPrice:160, rate: [star,star,star]},
  { id: 7, img: product7, nowPrice:120, oldPrice:160, rate: [star,star,star, star,star],discount:47 },
  { id: 8, img: product8,nowPrice:120, oldPrice:160, rate: [star,star,star,star],discount:32},
  { id: 9, img: product9, nowPrice:120, oldPrice:160, rate: [star,star,star,star] },
  { id: 10, img: product10,nowPrice:120, oldPrice:160, rate: [star,star,star,star,star],discount:22 },
  { id: 11, img: product11, nowPrice:120, oldPrice:160, rate: [star,star,star,star] },
  { id: 12, img: product12, nowPrice:120, oldPrice:160, rate: [star,star,star,star,star],discount:42 },
  { id: 13, img: product13,nowPrice:120, oldPrice:160, rate: [star,star,star,star],discount:53},
  { id: 14, img: product14, nowPrice:120, oldPrice:160, rate: [star,star,star] },
  { id: 15, img: product15, nowPrice:120, oldPrice:160, rate: [star,star],discount:37 },
  { id: 16, img: product16, nowPrice:120, oldPrice:160, rate:[star,star,star,star,star], discount:41 },
];
const Hero = () => {
  return (
    <div id="hero" className="myContainer pt-6 flex gap-x-5 ">
        <section className="w-full max-w-[180px] h-[344px] border-r-2 border-gray-500 flex flex-col gap-y-[12px]  ">
                <li className="flex items-center justify-between w-full max-w-[157px]"><a href="">Woman’s Fashion</a> <FaAngleRight /></li>
                <li className="flex items-center justify-between w-full max-w-[157px]"><a href="">Men’s Fashion</a> <FaAngleRight /></li>
                <li className="flex items-center justify-between w-full max-w-[157px]"><a href="">Electronics</a> <FaAngleRight /></li>
                <li className="flex items-center justify-between w-full max-w-[157px]"><a href="">Home & Lifestyle</a> <FaAngleRight /></li>
                <li className="flex items-center justify-between w-full max-w-[157px]"><a href="">Medicine</a> <FaAngleRight /></li>
                <li className="flex items-center justify-between w-full max-w-[157px]"><a href="">Sports & Outdoor</a> <FaAngleRight /></li>
                <li className="flex items-center justify-between w-full max-w-[157px]"><a href="">Baby’s & Toys</a> <FaAngleRight /></li>
                <li className="flex items-center justify-between w-full max-w-[157px]"><a href="">Groceries & Pets</a> <FaAngleRight /></li>
                <li className="flex items-center justify-between w-full max-w-[157px]"><a href="">Health & Beauty</a> <FaAngleRight /></li>
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
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        {productDb.map(product => {
          return(
            <SwiperSlide key={product.id}>
              <img src={product.img} className='' />
            </SwiperSlide>
          )
        })}
        
      </Swiper>
        </section>
    </div>
  )
}

export default Hero