import { Link, NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <div className=" h-[200px] bg-black   text-white">
    <div className="myContainer h-full flex items-start justify-between py-5">
    <span className="flex flex-col gap-y-[100px]">
    <p className="text-2xl font-bold">Exclusive</p>
    <p className="text-xl">©since 2024</p>
    </span>
    <nav className="flex items-start flex-col text-xl gap-y-3">
      <NavLink to='products' className={({isActive}) => isActive ? 'underline text-[#e84646]' : '' }>Product</NavLink>
      <NavLink to='about' className={({isActive}) => isActive ? 'underline text-[#e84646]' : '' }>About</NavLink>
      <NavLink to='signUp' className={({isActive}) => isActive ? 'underline text-[#e84646]' : '' }>SgnUp</NavLink>
    </nav>
    <span>
      <form className="flex items-start flex-col gap-y-4">
        <input type="text" className="w-[270px] h-10 outline-none rounded-sm text-black pl-3" placeholder="Write you message ✍" />
        <button type="button" className=" bg-[#e84646] rounded-sm py-2 px-6">Send message</button>
      </form>
    </span>
    </div>
    </div>
  )
}

export default Footer