//?component
import { Button, Card, Intro } from "../components";
//?react multi carousel for small carousel effect
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//?react
import { Fragment, useEffect, useState } from "react";
//?custom hook
import { useFetch } from "../hooks/useFetch";
//?toastify for message
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MostSales = () => {

  // const [url, setUrl] = useState(
  //   "https://fakestoreapi.com/products/"
  // );
  // const { data, error, isPending } = useFetch(url);
  // console.log(data)
  const [data, setData ] = useState([])
useEffect(() => {
  fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(s=> setData(s))
}, [])
  //?responsive for carousel
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
      <ToastContainer autoClose={1000} pauseOnHover={false} theme="light" />
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
        {data.map((product) => {
          return (
            <Fragment key={crypto.randomUUID()}>
              <Card toast={toast} data={product} favorite discount />
            </Fragment>
          );
        })}
      </Carousel>
      <Button center name="View All Products" link="/product" />
    </div>
  );
};

export default MostSales;
