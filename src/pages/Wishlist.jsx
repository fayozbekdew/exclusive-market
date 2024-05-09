//?react
import { useContext } from "react";
import { Fragment } from "react";
//?local-img
import {
  Empty_cart,
} from "../assets";
//?components
import { Button, Card, Intro } from "../components";
//!reducer
import { StoreContext } from "../context/ProductReducer";
//? react-multi-carousel for carousel effect
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Wishlist() {
  //! responsive for carousel effect
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
  //!context
  const { favoritList, searchList, addToBasket, clearSearchElements } =
    useContext(StoreContext);
  function allAddBasket() {
    favoritList.forEach((item) => addToBasket(item));
  }
  function clearSearch() {
    clearSearchElements();
  }
  return (
    <div className="myContainer py-20">
      {favoritList.length !== 0 ? (
        <>
          <span className="flex items-center justify-between mb-14">
            <small className="flex items-center font-medium text-[20px]">
              Wishlist ( <p>{favoritList.length}</p> )
            </small>
            <button
              onClick={allAddBasket}
              className="w-full max-w-[223px] h-14 border-gray-700 border flex items-center justify-center font-medium"
            >
              Move All To Bag
            </button>
          </span>
          <ul
            className={`${
              favoritList.length < 3 ? "justify-start" : "justify-evenly"
            } flex items-center gap-7   flex-wrap mb-20`}
          >
            {favoritList &&
              favoritList.map((item) => {
                return (
                  <Fragment key={crypto.randomUUID()}>
                    <Card wishlist data={item} />
                  </Fragment>
                );
              })}
          </ul>
        </>
      ) : (
        <div className="mt-[-80px] flex items-center justify-center flex-col mb-10">
          <img
            src={Empty_cart}
            className="w-[500px] h-[500px]"
            alt="empty cart img"
          />
          <Button name="Back to shopping" link="/" />
        </div>
      )}
      <div className="flex items-center justify-between border-t-2 pt-5">
        <Intro name="Just For You" />
        <div onClick={clearSearch}>
          <Button name={"Clear search elements"} />
        </div>
      </div>
      {searchList.length == 0 ? (
        <div className="flex items-center justify-center">
          <h2 className="text-[60px]">
            You have not searched for any products
          </h2>
        </div>
      ) : searchList.length <= 4 ? (
        <ul className="flex items-center gap-x-7 justify-start mt-14 mb-20">
          {searchList.map((item) => {
            return (
              <Fragment key={crypto.randomUUID()}>
                <Card data={item} />
              </Fragment>
            );
          })}
        </ul>
      ) : (
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
          {searchList.map((product) => {
            return (
              <Fragment key={crypto.randomUUID()}>
                <Card data={product} favorite discount />
              </Fragment>
            );
          })}
        </Carousel>
      )}
    </div>
  );
}

export default Wishlist;
