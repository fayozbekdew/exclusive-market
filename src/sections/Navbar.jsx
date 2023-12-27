import { CiSearch } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
const Navbar = () => {
  return (
    <div className="border-b-2">
      <div className="myContainer flex items-center justify-between h-[60px]  ">
      <a className="text-[24px] font-bold leading-[24px]" href="/">Exclusive</a>
      <ul className="flex items-center gap-x-[48px]">
        <li><a className="text-[16px] font-normal leading-[24px] active:underline" href="">Home</a></li>
        <li><a className="text-[16px] font-normal leading-[24px] active:underline" href="">Contact</a></li>
        <li><a className="text-[16px] font-normal leading-[24px] active:underline" href="">About</a></li>
        <li><a className="text-[16px] font-normal leading-[24px] active:underline" href="">SignUp</a></li>
      </ul>
      <div className="flex items-center gap-x-[20px]">
       <small className="relative flex items-center" >
       <input className=" w-[243px] h-[30px] outline-none pl-4 bg-slate-100 rounded-md" type="text" placeholder="What are you looking for?"  />
       <CiSearch className="absolute right-4 w-[20px] h-[20px]" />
       </small>
       <button ><MdFavoriteBorder className="w-[22px] h-[22px]" /></button>
       <button><SlBasket className="w-[22px] h-[22px]" /></button>
      </div>
    </div>
    </div>
  )
}

export default Navbar