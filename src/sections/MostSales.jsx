//?component
import { Button, Card, Intro } from "../components";
//?react multi carousel for small carousel effect
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//? images
import {
  product1,
  product10,
  product11,
  product12,
  product13,
  product14,
  product15,
  product16,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  star,
} from "../assets";
//?react
import { Fragment, useState } from "react";
//?custom hook
import { useFetch } from "../hooks/useFetch";
//?toastify for message
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//?local db
export const productDb = [
  {
    name: "djkksj",
    id: 1,
    img: product1,
    price: 120,
    oldPrice: 160,
    rate: [star, star, star, star],
    discount: 50,
  },
  {
    name: "jshjd",
    id: 2,
    img: product2,
    price: 140,
    oldPrice: 180,
    rate: [star, star, star, star, star],
    discount: 40,
  },
  {
    name: "lajsdja",
    id: 3,
    img: product3,
    price: 120,
    oldPrice: 160,
    rate: [star, star, star],
    discount: 45,
  },
  {
    name: "dsksc",
    id: 4,
    img: product4,
    price: 120,
    oldPrice: 160,
    rate: [star, star, star, star],
    discount: 30,
  },
  {
    name: "djdjs",
    id: 5,
    img: product5,
    price: 120,
    oldPrice: 160,
    rate: [star, star, star, star, star],
    discount: 26,
  },
  {
    name: "dsjdq",
    id: 6,
    img: product6,
    price: 120,
    oldPrice: 160,
    rate: [star, star, star],
  },
  {
    name: "llasjw",
    id: 7,
    img: product7,
    price: 120,
    oldPrice: 160,
    rate: [star, star, star, star, star],
    discount: 47,
  },
  {
    name: "djkksjqq",
    id: 8,
    img: product8,
    price: 120,
    oldPrice: 160,
    rate: [star, star, star, star],
    discount: 32,
  },
  {
    name: "iiasds",
    id: 9,
    img: product9,
    price: 120,
    oldPrice: 160,
    rate: [star, star, star, star],
  },
  {
    name: "oasdns",
    id: 10,
    img: product10,
    price: 120,
    oldPrice: 160,
    rate: [star, star, star, star, star],
    discount: 22,
  },
  {
    name: "djjdjs",
    id: 11,
    img: product11,
    price: 120,
    oldPrice: 160,
    rate: [star, star, star, star],
  },
  {
    name: "ytdsv",
    id: 12,
    img: product12,
    price: 120,
    oldPrice: 160,
    rate: [star, star, star, star, star],
    discount: 42,
  },
  {
    name: "ajewu",
    id: 13,
    img: product13,
    price: 120,
    oldPrice: 160,
    rate: [star, star, star, star],
    discount: 53,
  },
  {
    name: "diiidsd",
    id: 14,
    img: product14,
    price: 120,
    oldPrice: 160,
    rate: [star, star, star],
  },
  {
    name: "nshhss",
    id: 15,
    img: product15,
    price: 120,
    oldPrice: 160,
    rate: [star, star],
    discount: 37,
  },
  {
    name: "djsjds",
    id: 16,
    img: product16,
    price: 120,
    oldPrice: 160,
    rate: [star, star, star, star, star],
    discount: 41,
  },
];
const MostSales = () => {
  const [url, setUrl] = useState(
    "https://real-time-amazon-data.p.rapidapi.com/search"
  );
  const { data, error, isPending } = useFetch(url);
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
        {productDb.map((product) => {
          return (
            <Fragment key={crypto.randomUUID()}>
              <Card toast={toast} data={product} favorite discount />
            </Fragment>
          );
        })}
      </Carousel>
      <Button center name="View All Products" link="#" />
    </div>
  );
};

export default MostSales;
