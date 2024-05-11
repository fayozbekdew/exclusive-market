//?react
import { Fragment } from "react";
//?rrd
import { Link } from "react-router-dom";
//?local img
import {
  musicInstrument,
} from "../assets";
//?component
import { Card, Intro } from "../components";
//?toastify for message
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//?db
import { useState } from "react";
import { useEffect } from "react";



const BestProducts = () => {
  const [data, setData ] = useState([])
useEffect(() => {
  fetch('https://fakestoreapi.com/products?limit=4')
            .then(res=>res.json())
            .then(s=> setData(s))
}, [])
  return (
    <div className="myContainer mt-[70px]">
      <ToastContainer autoClose={1000} pauseOnHover={false} theme="light" />
      <Intro name={"This Month"} />
      <div className="flex items-center justify-between mt-5">
        <h2 className="text-[36px] font-semibold leading-[48px] text-black mr-[87px]">
          Best Selling Products
        </h2>
        <Link to='/products' className="w-[160px] h-[56px] bg-[#DB4444] rounded-sm flex items-center justify-center text-[16px] font-semibold text-white leading-[24]">
          View All
        </Link>
      </div>
      <ul className="flex items-center justify-between mt-14 mb-24">
        {data && data.map((element) => {
          return (
            <Fragment key={crypto.randomUUID()}>
              <Card toast={toast} favorite data={element} />
            </Fragment>
          );
        })}
      </ul>
      <div className="bg-black py-[69px] px-14 flex justify-between">
        <div>
          <h6 className="text-[16px] leading-[20px] font-bold text-[#00FF66]">
            Categories
          </h6>
          <h1 className="text-[48px] text-white font-bold leading-[60px] my-8 w-full max-w-[443px] ">
            Enhance Your Music Experience
          </h1>
          <ul className="flex items-center gap-x-[24px]">
            <li className="w-[62px] h-[62px] flex items-center justify-center flex-col rounded-full bg-white text-black">
              <p className="text-[16px] font-bold">05</p>
              <p className="text-[11px] leading-[18px]">Days</p>
            </li>
            <li className="w-[62px] h-[62px] flex items-center justify-center flex-col rounded-full bg-white text-black">
              <p className="text-[16px] font-bold">23</p>
              <p className="text-[11px] leading-[18px]">Hours</p>
            </li>
            <li className="w-[62px] h-[62px] flex items-center justify-center flex-col rounded-full bg-white text-black">
              <p className="text-[16px] font-bold">40</p>
              <p className="text-[11px] leading-[18px]">Minutes</p>
            </li>
            <li className="w-[62px] h-[62px] flex items-center justify-center flex-col rounded-full bg-white text-black">
              <p className="text-[16px] font-bold">59</p>
              <p className="text-[11px] leading-[18px]">Seconds</p>
            </li>
          </ul>
          <button className="w-[171px] mt-10 h-14 bg-[#00FF66] rounded-sm flex items-center justify-center font-bold text-white">
            Buy Now
          </button>
        </div>
        <img src={musicInstrument} className="w-[568px] h-[330px] " />
      </div>
    </div>
  );
};

export default BestProducts;
