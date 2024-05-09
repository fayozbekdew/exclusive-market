import { MdStarRate } from "react-icons/md";
import { Categories } from "../sections"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useContext } from "react";
import { StoreContext } from "../context/ProductReducer";
import { toast } from "react-toastify";

const Product = () => {
  const { addToBasket} = useContext(StoreContext)
  const {id} = useParams()
  const [data, setData ] = useState([])
useEffect(() => {
  fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(s=> setData(s))
}, [])
function addBasket() {
  addToBasket(data);
  console.log(data)
  toast.success(
    `${data?.title?.charAt()?.toUpperCase() + data?.title?.slice(1)} added to bag`,
    {
      icon: "🛒",
      className: "toastMessage",
    }
  );
}
  return (
    <div className="myContainer">
      <div className="flex items-center justify-around py-24">
      <div>
        <img src={data && data?.image} className='w-[400px] h-[400px]' />
      </div>
      <div className="w-full max-w-[500px]">
        <h2 className="text-[30px] font-bold">{data && data?.category?.charAt().toUpperCase() + data?.category?.slice(1)}</h2>
        <p className="text-[40px]">{data && data?.title}</p>
        <span className="flex items-center gap-x-3">
          <small className="flex items-center text-[20px] gap-x-2 font-bold">
        <p className="">Rating</p>
        <p className="flex items-center">{data?.rating?.rate} <MdStarRate /></p>
          </small>
          <small className="flex items-center text-[15px]"><p>{data?.rating?.count} Count</p>
          </small>
        </span>
        <p className="text-[30px] font-bold my-3 ">${data.price}</p>
        <p>{data.description}</p>
        <span className="flex items-center gap-x-3 mt-4">
          <button onClick={addBasket} className="border px-8 py-3 text-[18px]">
          Add to Basket
          </button>
          <Link to='/basket' className="bg-[#d62158] px-8 py-3 text-white text-[18px]">
          Go to Backet
          </Link>
        </span>
      </div>
      </div>
    </div>
  )
}

export default Product