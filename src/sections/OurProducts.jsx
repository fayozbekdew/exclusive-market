//?react
import { Fragment, useEffect, useState } from "react";
//?component
import { Button, Card, Intro } from "../components";
//?toastify for message
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OurProducts = () => {
  const [data, setData ] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
              .then(res=>res.json())
              .then(s=> setData(s))
  }, [])
  return (
    <div className="myContainer mt-20 mb-32">
      <ToastContainer autoClose={1000} pauseOnHover={false} theme="light" />
      <Intro name={"Our Products"} />
      <div className="mt-7">
        <h2 className="text-[36px] font-semibold leading-[48px] text-black mr-[87px]">
          Best Selling Products
        </h2>
      </div>
      <ul className="flex items-center flex-wrap justify-between gap-x-7 gap-y-14 py-14">
        {data.slice(0,8).map((item) => {
          return (
            <Fragment key={crypto.randomUUID()}>
              <Card toast={toast} favorite data={item} />
            </Fragment>
          );
        })}
      </ul>
      <Button center name="View All Products" link="/product" />
    </div>
  );
};

export default OurProducts;
