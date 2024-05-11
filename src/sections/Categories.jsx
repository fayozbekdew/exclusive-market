//?rrd
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
//?local img
import { Jewelery, MensClothing, phones, VomenClothing } from "../assets";
import { Card, Intro } from "../components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Skeleton from "react-loading-skeleton";
//?local db
const categoriesList = [
  { id: 1, name: "All", link: "", img: phones },
  { id: 1, name: "Electronics", link: "electronics", img: phones },
  { id: 2, name: "Jewelery", link: "jewelery", img: Jewelery },
  { id: 1, name: "Men's clothing", link: "men's clothing", img: MensClothing },
  {
    id: 1,
    name: "women's clothing",
    link: "women's clothing",
    img: VomenClothing,
  },
];

const Loading = () => {
  return (
    <div className="flex items-center flex-wrap justify-start gap-x-7 gap-y-14 py-14">
      <div className="w-[270px] h-[250px]">
        <span>
          <Skeleton height={230}/>
          <p><Skeleton height={20}/></p>
          <h2><Skeleton height={40}/></h2>
        </span>
      </div>
      <div className="w-[270px] h-[250px]">
        <span>
          <Skeleton height={230}/>
          <p><Skeleton height={20}/></p>
          <h2><Skeleton height={40}/></h2>
        </span>
      </div>
      <div className="w-[270px] h-[250px]">
        <span>
          <Skeleton height={230}/>
          <p><Skeleton height={20}/></p>
          <h2><Skeleton height={40}/></h2>
        </span>
      </div>
      <div className="w-[270px] h-[250px]">
        <span>
          <Skeleton height={230}/>
          <p><Skeleton height={20}/></p>
          <h2><Skeleton height={40}/></h2>
        </span>
      </div>
    </div>
  );
};
const Categories = () => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("https://fakestoreapi.com/products/");
  const [activeEl, setActiveEl] = useState("All");
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((s) => setData(s));
  }, [url]);
  return (
    <div className="myContainer  border-b-2 pb-14">
      <div className="flex items-center justify-center  ">
        <ul className="flex items-center mt-14 gap-x-[30px]">
          {categoriesList.map((category) => {
            return (
              <Link
               key={crypto.randomUUID()}
                onClick={() => {
                  category.link != ""
                    ? setUrl(
                        `https://fakestoreapi.com/products/category/${category.link}`
                      )
                    : setUrl(`https://fakestoreapi.com/products/`);
                  setActiveEl(category.name);
                }}
                className={`${
                  activeEl == category.name ? "bg-[#DB4444]" : ""
                } w-[130px] h-[115px] rounded-sm border-gray-500 border flex items-center flex-col transition-all justify-center hover:bg-[#DB4444]`}
              >
                <img
                  src={category.img}
                  className="w-12 h-12"
                  alt="category  img"
                />
                <p>{category.name}</p>
              </Link>
            );
          })}
        </ul>
      </div>
      {data == null ? (
        <Loading />
      ) : (
        <ul className="flex items-center flex-wrap justify-start gap-x-7 gap-y-14 py-14">
          {data.map((item) => {
            return (
              <Fragment key={crypto.randomUUID()}>
                <Card toast={toast} favorite data={item} />
              </Fragment>
            );
          })}
        </ul>
      ) }
    </div>
  );
};

export default Categories;
