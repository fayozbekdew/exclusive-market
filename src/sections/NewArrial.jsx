import { customService, delivery, guarantee, gucci, PlayStation, speaker, womanCollection } from "../assets";
import { Intro } from "../components";
import { FaArrowUp } from "react-icons/fa";

const NewArrial = () => {
  return (
    <div className="myContainer relative pb-24">
      <Intro name={"Featured"} />
      <h2 className="text-[36px] font-semibold leading-[48px] text-black mr-[87px] mt-7 mb-14">
        New Arrival
      </h2>
      <div className="flex h-[570px] justify-center overflow-y-hidden text-white gap-[30px]">
        <div className="bg-black flex items-end relative w-[500px] h-[535px] overflow-hidden ">
          <img src={PlayStation} className="h-[511px] w-[511px]" />
          <div className="absolute bottom-10 left-4">
          <h6 className="text-[24px] font-semibold leading-[24px] mb-2">PlayStation 5</h6>
          <p className="text-[14px] text-[#FAFAFA] mb-2">Black and White version of the PS5 coming out on sale.</p>
          <a className="text-[16px] underline" href="#">Shop Now</a>
          </div>
        </div>
        <div className="flex flex-col gap-[30px] w-[570px] h-[600px]">
          <div className="relative flex items-center justify-between  bg-[#0d0d0d] h-[284px]">
            <img
              src={womanCollection}
              className="h-[280px] w-[332px]"
              alt=""
            />
            <div className="w-[200px] pb-8 pl-1">
            <h6 className="text-[24px] font-semibold leading-[24px] mb-2">Women’s Collections</h6>
            <p className="text-[14px] text-[#FAFAFA] mb-2">Featured woman collections that give you another vibe.</p>
            <a className="text-[16px] underline" href="#">Shop Now</a>
            </div>
          </div>
          <div className="flex gap-[30px]">
            <span className="bg-[#313131] w-[300px] flex items-center justify-center relative">
              <img src={speaker} className="h-[221px] w-[190px]  " alt="" />
              <div className="absolute left-3 bottom-8 ">
              <h6 className="text-[24px] font-semibold">Speakers</h6>
              <p className="text-[14px] text-[#FAFAFA]">Amazon wireless speakers</p>
              <a className="text-[16px] underline" href="#">Shop Now</a>
              </div>
            </span>
            <span className="bg-[#313131] w-[300px] flex items-center justify-center relative">
              <img src={gucci} className="h-[221px] w-[190px]  " alt="" />
              <div className="absolute left-3 bottom-8 ">
              <h6 className="text-[24px] font-semibold">Perfume</h6>
              <p className="text-[14px] text-[#FAFAFA]">GUCCI INTENSE OUD EDP</p>
              <a className="text-[16px] underline" href="#">Shop Now</a>
              </div>
            </span>
          </div>
        </div>
      </div>
      <ul className="flex items-center justify-center gap-x-[88px] mt-32">
        <li className="w-[250px] h-[160px] flex items-center justify-center flex-col">
        <img src={delivery} className="w-16 h-16 bg-black rounded-full border-gray-400 border-[8px]" alt="" />
        <h3 className="text-[20px] font-semibold mt-6 leading-[28px]">FREE AND FAST DELIVERY</h3>
        <p className="text-[14px] text-gray-600">Free delivery for all orders over $140</p>
        </li>
        <li className="w-[250px] h-[160px] flex items-center justify-center flex-col">
        <img src={customService} className="w-16 h-16 bg-black rounded-full border-gray-400 border-[8px]" alt="" />
        <h3 className="text-[20px] font-semibold mt-6 leading-[28px]">24/7 CUSTOMER SERVICE</h3>
        <p className="text-[14px] text-gray-600">
Friendly 24/7 customer support</p>
        </li>
        <li className="w-[250px] h-[160px] flex items-center justify-center flex-col">
        <img src={guarantee} className="w-16 h-16 bg-black rounded-full border-gray-400 border-[8px]" alt="" />
        <h3 className="text-[20px] font-semibold mt-6 leading-[28px]">MONEY BACK GUARANTEE</h3>
        <p className="text-[14px] text-gray-600">We reurn money within 30 days</p>
        </li>
      </ul>
      <a href="#hero" className="absolute bottom-10 right-10 border-[3px] border-black border-dashed p-2 ">
      <FaArrowUp className="h-6 w-6 " />
      </a>
    </div>
  );
};

export default NewArrial;
