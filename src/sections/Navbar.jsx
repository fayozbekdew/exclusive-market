//?react
import { useContext, useEffect } from "react";
import { useState } from "react";
//?react icons
import { CiSearch } from "react-icons/ci";
//?rrd
import { Link, NavLink, useNavigate } from "react-router-dom";
//?local img
import {
  Account_icon,
  Basket_Icon,
  Basket_Icon_Active,
  Favorite_Icon,
  Favorite_Icon_Active,
} from "../assets";
//!reducer
import { StoreContext } from "../context/ProductReducer";
//?local db
const NavDb = [
  { name: "Home", link: "/", id: 183883 },
  { name: "Product", link: "/products", id: 18389399349 },
  { name: "About", link: "/about", id: 383293 },
  { name: "Contact", link: "/contact", id: 2398283 },
  { name: "SignUp", link: "/signup", id: 49029032 },
];
const Navbar = () => {
  const [data, setData ] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
              .then(res=>res.json())
              .then(s=> setData(s))
  }, [])
  const navigate = useNavigate();
  let [input, setInput] = useState("");
  function submitFn(e) {
    e.preventDefault();
    addSearchText(input);
    data.forEach((product) => {
      if (product.title.slice(0, 4) === input.slice(0, 4)) {
        addSearchList(product);
      }
    });
    setInput("");
    navigate("/search");
  }
  //!context
  const { addSearchList, addSearchText } = useContext(StoreContext);
  const { products, favoritList } = useContext(StoreContext);
  //element
  const [favorite, setFavorite] = useState("");
  return (
    <div className="border-b-2 sticky-header bg-white bg-opacity-30 backdrop-filter backdrop-blur-md">
      <div className="myContainer  flex items-center justify-between h-[60px]  ">
        <Link
          onClick={() => {
            setFavorite("");
            setActiveEl("Home");
          }}
          className="text-[24px] text-[#DB4444] font-bold leading-[24px]"
          to="/"
        >
          Exclusive{" "}
        </Link>
        <nav className="flex items-center gap-x-[48px]">
          {NavDb.map((item) => {
            return (
              <NavLink
                key={item.id}
                onClick={() => {
                }}
                className={({isActive}) => isActive ? 'text-red-400 underline text-[16px] font-normal leading-[24px] ' : 'text-[16px] font-normal leading-[24px] ' }
                to={item.link}
              >
                {item.name}
              </NavLink>
            );
          })}
        </nav>
        <div className="flex items-center gap-x-[20px]">
          <small className="relative flex items-center">
            <form onSubmit={submitFn}>
              <input
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                value={input}
                className=" w-[243px] h-[30px] outline-none pl-4 bg-slate-100 rounded-md"
                type="text"
                placeholder="What are you looking for?"
              />
            </form>
            <CiSearch className="absolute right-4 w-[20px] h-[20px]" />
          </small>
          <Link
            className="relative"
            onClick={() => {
              setFavorite("/wishlist");
            }}
            to="/wishlist"
          >
            <img
              src={`${
                favorite == "/wishlist" ? Favorite_Icon_Active : Favorite_Icon
              }`}
              className="w-[26px] h-[26px]"
            />
            {favoritList.length != 0 ? (
              <span className="absolute top-[-5px] right-[-7px] text-white text-[12px] bg-[#DB4444] w-4 h-4 rounded-full flex items-center justify-center">
                {favoritList.length}
              </span>
            ) : (
              ""
            )}
          </Link>
          <Link
            className="relative"
            onClick={() => {
              setFavorite("/basket");
            }}
            to="/basket"
          >
            <img
              src={`${
                favorite == "/basket" ? Basket_Icon_Active : Basket_Icon
              }`}
              className="w-[26px] h-[26px] "
            />
            {products.length != 0 ? (
              <span className="absolute top-[-5px] right-[-10px] text-white text-[12px] bg-[#DB4444] w-4 h-4 rounded-full flex items-center justify-center">
                {products.length}
              </span>
            ) : (
              ""
            )}
          </Link>
          <Link
            to="/"
            className="flex items-center justify-center bg-[#DB4444] rounded-full w-8 h-8"
          >
            <img src={Account_icon} className="w-5 h-5" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
