import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link} from "react-router-dom";
import { Basket_Icon, Basket_Icon_Active, Favorite_Icon, Favorite_Icon_Active } from "../assets";
const NavDb = [
  {name:'Home', link:'/', id:183883},
  {name:'Contact', link:'/contact', id:2398283},
  {name:'About', link:'/about', id:383293},
  {name:'SignUp', link:'/signup', id:49029032}
]
const Navbar = () => {
  const [ favorite, setFavorite ] = useState('')
  const [ activeEl, setActiveEl ] = useState('Home')

  return (
    <div className="border-b-2">
      <div className="myContainer flex items-center justify-between h-[60px]  ">
      <Link onClick={() => {setFavorite('');
       setActiveEl('Home') }} className="text-[24px] font-bold leading-[24px]" to="/">Exclusive </Link>
      <ul className="flex items-center gap-x-[48px]">
        {NavDb.map(item => {
          return(
            <Link key={item.id} onClick={ () => {setActiveEl(item.name); setFavorite('')}} className={`${activeEl == item.name ? 'underline text-[#DB4444] ' : '' } text-[16px] font-normal leading-[24px] `} to={item.link}>{item.name}
            </Link>
          )
        })}
        
      </ul>
      <div className="flex items-center gap-x-[20px]">
       <small className="relative flex items-center" >
       <input className=" w-[243px] h-[30px] outline-none pl-4 bg-slate-100 rounded-md" type="text" placeholder="What are you looking for?"  />
       <CiSearch className="absolute right-4 w-[20px] h-[20px]" />
       </small>
       <Link onClick={() => {setFavorite('/wishlist');
       setActiveEl('') }} to='/wishlist' >
       <img src={`${favorite == '/wishlist' ? Favorite_Icon_Active : Favorite_Icon }`} className="w-[26px] h-[26px]" />
       </Link>
       <Link onClick={() => {setFavorite('/basket');
       setActiveEl('') }} to='/basket' >
       <img src={`${favorite == '/basket' ? Basket_Icon_Active : Basket_Icon }`} className="w-[26px] h-[26px]" />
       </Link>
      </div>
    </div>
    </div>
  )
}

export default Navbar