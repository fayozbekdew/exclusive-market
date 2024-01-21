//?react-icons
import { MdFavoriteBorder } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
//?local-img
import { Basket_White } from "../assets";
//?context-react
import { useContext } from "react";
//?reducer
import { StoreContext } from "../context/ProductReducer";

const Card = ({ data, discount, wishlist, favorite, toast }) => {
  //?disturaction
  let { img, oldPrice, price, name, rate } = data;
  //!reducers
  const { addToBasket, addToFavorite, removeFromFavorite } =
    useContext(StoreContext);
  //?functions
  function addBasket() {
    addToBasket(data);
    toast.success(
      `${data.name.charAt().toUpperCase() + data.name.slice(1)} added to bag`,
      {
        icon: "🛒",
        className: "toastMessage",
      }
    );
  }
  function addFavorite() {
    addToFavorite(data);
    toast.success(
      ` ${
        data.name.charAt().toUpperCase() + data.name.slice(1)
      } added to favorite`,
      {
        icon: "⭐",
        className: "toastMessage",
      }
    );
  }
  function removeFavorite() {
    removeFromFavorite(data);
  }
  return (
    <div
      key={crypto.randomUUID()}
      className={` w-[270px] h-[350px]   flex flex-col  group card `}
    >
      <div className="w-[270px] h-[250px] bg-[#F5F5F5] flex items-center justify-center relative">
        <img
          src={img}
          alt="product img"
          className="transition-all group-hover:scale-[1.1] h-[152px] w-[172px]"
        />
        <span className="flex flex-col items-center gap-y-1 absolute right-3 top-2">
          <button
            onClick={addFavorite}
            className={`${
              favorite ? "flex" : "hidden"
            } bg-white w-8 h-8 rounded-full items-center justify-center`}
          >
            <MdFavoriteBorder className="w-[22px] h-[22px]" />
          </button>
          <button
            onClick={removeFavorite}
            className={`${
              wishlist ? "flex" : "hidden"
            } bg-white w-8 h-8 rounded-full items-center justify-center`}
          >
            <RiDeleteBin6Line className="w-[22px] h-[22px]" />
          </button>
        </span>
        {discount ? (
          <button className="w-[55px] h-[26px] rounded-md text-white bg-[#DB4444] flex items-center justify-center absolute left-2 top-2 ">
            -{data.discount ? data.discount : 0}%
          </button>
        ) : (
          ""
        )}
        <button
          onClick={addBasket}
          className="w-full h-10 bg-black absolute bottom-0 rounded-t-[5px] text-white hidden items-center gap-x-2 justify-center transition-all duration-700  group-hover:flex"
        >
          <img src={Basket_White} className="w-6 h-6" />
          Add To Cart
        </button>
      </div>
      <div className="flex flex-col gap-y-2 mt-3 pl-2 pb-2">
        <h4 className="font-semibold text-[16px] leading-[24px] uppercase">
          {name}
        </h4>
        <small className="flex items-center gap-x-2">
          <p className="text-[#DB4444] text-[16px] font-semibold">${price}</p>
          <p className="line-through text-gray-400 text-[16px] font-semibold">
            ${oldPrice ? oldPrice : ""}
          </p>
        </small>
        <div className="flex items-center">
          {rate.map((star) => {
            return (
              <div key={crypto.randomUUID()}>
                <img src={star} className="h-5 w-5" alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
