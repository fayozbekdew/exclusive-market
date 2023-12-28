import { Link } from "react-router-dom"
import { google, signIn } from "../assets"

const SignIn = () => {
  return (
    <div className="myContainer py-[70px] flex  justify-around">
    <div className="w-full max-w-[805px] h-[581px]">
      <img src={signIn} className='h-[550px] w-[900px]'  />
    </div>
    <div>
      <h1 className="text-[36px] font-bold tracking-[1.44px] mb-6">Log in to Exclusive</h1>
      <p className="mb-12">Enter your details below</p>
      <form className="flex flex-col gap-y-10">
      <input className="border-b-2 outline-none pb-1 border-gray-700 w-full" type="text" placeholder="Email or Phone Number" />
      <input className="border-b-2 outline-none pb-1 border-gray-700 w-full" type="password" placeholder="Password" />
      <span className="flex items-end justify-between">
      <Link className="w-full max-w-[143px] h-[56px] bg-[#DB4444] text-white flex items-center justify-center">
      Log In
      </Link>
      <p className="text-[#DB4444]">Forget Password?</p>
      </span>

      </form>
      <span className="flex items-center gap-2 mt-8"><p className="text-gray-400">Already have not account?</p> <Link className="text-black underline" to='/signup'>Sign Up</Link></span>
    </div>
    </div>
  )
}

export default SignIn