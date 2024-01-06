import { useContext } from "react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { productDb } from "./MostSales";
import {
  Account_icon,
  Basket_Icon,
  Basket_Icon_Active,
  Favorite_Icon,
  Favorite_Icon_Active,
} from "../assets";
import { StoreContext } from "../context/ProductReducer";

const NavDb = [
  { name: "Home", link: "/", id: 183883 },
  { name: "Contact", link: "/contact", id: 2398283 },
  { name: "About", link: "/about", id: 383293 },
  { name: "SignUp", link: "/signup", id: 49029032 },
];
const Navbar = () => {
  const navigate = useNavigate()
  const {addSearchList, addSearchText} = useContext(StoreContext)
  let [input, setInput] = useState('')
  function submitFn(e){
  e.preventDefault()
  addSearchText(input)
  productDb.forEach(product => {
      if(product.name.slice(0, 2) === input.slice(0,2)){
       addSearchList(product)
      }
  })
  setInput('')
  navigate('/search')
}
  //context
  const { products,favoritList } = useContext(StoreContext)
  //element
  const [favorite, setFavorite] = useState("");
  const [activeEl, setActiveEl] = useState("Home");

  return (
    <div className="border-b-2">
      <div className="myContainer flex items-center justify-between h-[60px]  ">
        <Link
          onClick={() => {
            setFavorite("");
            setActiveEl("Home");
          }}
          className="text-[24px] font-bold leading-[24px]"
          to="/"
        >
          Exclusive{" "}
        </Link>
        <ul className="flex items-center gap-x-[48px]">
          {NavDb.map((item) => {
            return (
              <Link
                key={item.id}
                onClick={() => {
                  setActiveEl(item.name);
                  setFavorite("");
                }}
                className={`${
                  activeEl == item.name ? "underline text-[#DB4444] " : ""
                } text-[16px] font-normal leading-[24px] `}
                to={item.link}
              >
                {item.name}
              </Link>
            );
          })}
        </ul>
        <div className="flex items-center gap-x-[20px]">
          <small className="relative flex items-center">
            <form onSubmit={submitFn} >
            <input
              onChange={(e) => {
                setInput(e.target.value)
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
              setActiveEl("");
            }}
            to="/wishlist"
          >
            <img
              src={`${
                favorite == "/wishlist" ? Favorite_Icon_Active : Favorite_Icon
              }`}
              className="w-[26px] h-[26px]"
            />
            {favoritList.length != 0 ? <span className="absolute top-[-5px] right-[-7px] text-white text-[12px] bg-[#DB4444] w-4 h-4 rounded-full flex items-center justify-center">
              {favoritList.length}
            </span> : ''}
          </Link>
          <Link
            className="relative"
            onClick={() => {
              setFavorite("/basket");
              setActiveEl("");
            }}
            to="/basket"
          >
            <img
              src={`${
                favorite == "/basket" ? Basket_Icon_Active : Basket_Icon
              }`}
              className="w-[26px] h-[26px] "
            />
            {products.length != 0 ? <span className="absolute top-[-5px] right-[-10px] text-white text-[12px] bg-[#DB4444] w-4 h-4 rounded-full flex items-center justify-center">
              {products.length}
            </span> : ''}
          </Link>
          <Link to='/' className="flex items-center justify-center bg-[#DB4444] rounded-full w-8 h-8">
          <img src={Account_icon} className='w-5 h-5' alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
