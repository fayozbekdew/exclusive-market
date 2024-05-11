//react
import { useState } from "react";
import { useContext } from "react";
//local-img
import { close_btn } from "../assets";
//react-icons
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
//component
import { Button } from "../components";
//reducer
import { StoreContext } from "../context/ProductReducer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function Basket() {
  //context
  const { total, products, removeFromBasket } = useContext(StoreContext);
  //element
  let [quantity, setQuantity] = useState(1);
  //function
  function handleRemove(data) {
    removeFromBasket(data);
  }
  function plusFn(element, id) {
    setQuantity(++quantity);
  }
  function minusFn() {
    setQuantity(--quantity);
  }
  return (
    <div className="myContainer pt-5 pb-32">
      <ToastContainer />
      <div className=" flex items-center justify-between px-10 py-6 border-[4px] border-gray-200 rounded-md mb-10">
        <p className="font-medium text-[16px]">Product</p>
        <p className="font-medium text-[16px]">Price</p>
        <p className="font-medium text-[16px]">Quantity</p>
        <p className="font-medium text-[16px]">Subtotal</p>
      </div>
      <ul className="flex flex-col gap-y-4">
        {products.map((product) => {
          // console.log(product);
          return (
            <li
              key={crypto.randomUUID()}
              className="group flex items-center justify-between px-10 py-6 border-[4px] border-gray-200 rounded-md backetItem"
            >
              <span className="flex items-center gap-x-5">
                <small className="relative">
                  <img src={product.image} className="w-12 h-12" />
                  <small
                    onClick={() => handleRemove(product)}
                    className="group-hover:flex cursor-pointer hidden items-center justify-center w-5 h-5 bg-[#DB4444] rounded-full absolute top-[-7px] left-[-10px]"
                  >
                    <img src={close_btn} className="w-2 h-2" alt="close btn" />
                  </small>
                </small>
                <p className="">{product.title}</p>
              </span>
              <p>${product.price}</p>
              <span className="flex items-center justify-center gap-x-4 w-20 h-11 border border-gray-300 rounded-md">
                <p>{quantity}</p>
                <span className="flex items-center flex-col gap-y-1">
                  <button onClick={() => plusFn(product, product.id)}>
                    <IoIosArrowUp />
                  </button>
                  <button onClick={minusFn}>
                    <IoIosArrowDown />
                  </button>
                </span>
              </span>
              <p>${product.price * quantity}</p>
            </li>
          );
        })}
      </ul>
      <div className="w-full max-w-[450px] ml-auto mt-20 py-8 px-6 border-[3px] border-gray-400 rounded-md">
        <h4 className="text-[20px] font-medium mb-6">Cart Total</h4>
        <ul className=" flex items-center flex-col gap-y-4 ">
          <li className="w-[352px] pb-2 flex items-center justify-between border-b-2 border-gray-400">
            <p className="text-[16px] font-medium">Subtotal:</p>
            <p>${total}</p>
          </li>
          <li className="w-[352px] pb-2 flex items-center justify-between border-b-2 border-gray-400">
            <p className="text-[16px] font-medium">Shipping:</p>
            <p>Free</p>
          </li>
          <li className="w-[352px] pb-2 flex items-center justify-between ">
            <p className="text-[16px] font-medium">Total:</p>
            <p>${total}</p>
          </li>
          <Button name="Procees to checkout" />
        </ul>
      </div>
    </div>
  );
}

export default Basket;
