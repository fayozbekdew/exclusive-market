import {  Card, Intro } from "../components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// images
import { product1, product10, product11, product12, product13, product14, product15, product16, product2, product3, product4, product5, product6, product7, product8, product9,star } from "../assets";


const MostSales = () => {
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
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="myContainer pt-[40px] flex flex-col border-b-2 pb-14 ">
      <Intro name={"Today's"} />
      <div className="pt-[24px] flex items-center">
        <h2 className="text-[36px] font-semibold leading-[48px] text-black mr-[87px]">
          Most Sales
        </h2>
        <h1 className="text-[36px] font-semibold leading-[48px] text-black">
          03:21:32
        </h1>
      </div>
      <Carousel 
      className="mt-[31px] mb-16 flex-col"
      responsive={responsive}
      arrows={false}
    //   customButtonGroup={<ButtonGroup />}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      >
        {productDb.map( product => {
            return(
           <>
            <Card data={product} discount/>
           </>
            )
        })}
      </Carousel>
      <a className="w-[234px] h-[56px] bg-[#DB4444] flex items-center justify-center rounded-sm  text-white text-[16px] font-semibold leading-[24px] mx-auto" href="#">View All Products</a>
    </div>
  );
};

export default MostSales;
