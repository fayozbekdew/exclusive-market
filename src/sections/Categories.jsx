//?rrd
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
//?local img
import {
  camera,
  computers,
  gaming,
  headPhones,
  phones,
  smartWatch,
} from "../assets";
import { Card, Intro } from "../components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//?local db
const categoriesList = [
  { id: 1, name: "Electronics", link: "electronics", img: phones },
  { id: 2, name: "Jewelery", link: "jewelery", img: computers },
  { id: 1, name: "Men's clothing", link: "men's clothing", img: smartWatch },
  { id: 1, name: "women's clothing", link: "women's clothing", img: gaming },
];

const Categories = () => {
  const [data, setData ] = useState([])
  const [url, setUrl] = useState('https://fakestoreapi.com/products/')
  console.log(url);
  useEffect(() => {
    fetch(url)
              .then(res=>res.json())
              .then(s=> setData(s))
  }, [url])
  return (
    <div className="myContainer  border-b-2 pb-14">
      <div className="flex items-center justify-center  ">
        <ul className="flex items-center mt-14 gap-x-[30px]">
          {categoriesList.map((category) => {
            return (
              <Link
                // to={category.link}
                key={crypto.randomUUID()}
                onClick={() => setUrl(`https://fakestoreapi.com/products/category/${category.link}`)}
                className="w-[130px] h-[115px] rounded-sm border-gray-500 border flex items-center flex-col transition-all justify-center hover:bg-[#DB4444]"
              >
                <img src={category.img} alt="category  img" />
                <p>{category.name}</p>
              </Link>
            );
          })}
        </ul>
       
      </div>
      <ul className="flex items-center flex-wrap justify-start gap-x-7 gap-y-14 py-14">
        {data.map((item) => {
          return (
            <Fragment key={crypto.randomUUID()}>
              <Card toast={toast} favorite data={item} />
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
