import { Link } from "react-router-dom"
import { google, signIn } from "../assets"

const SignUp = () => {
  return (
    <div className="myContainer py-[70px] flex  justify-around">
    <div className="w-full max-w-[805px] h-[581px]">
      <img src={signIn} className='h-[550px] w-[900px]'  />
    </div>
    <div>
      <h1 className="text-[36px] font-bold tracking-[1.44px] mb-6">Create an account</h1>
      <p className="mb-12">Enter your details below</p>
      <form className="flex flex-col gap-y-10">
      <input className="border-b-2 outline-none pb-1 border-gray-700 w-full" type="text" placeholder="Name" />
      <input className="border-b-2 outline-none pb-1 border-gray-700 w-full" type="text" placeholder="Email or Phone Number" />
      <input className="border-b-2 outline-none pb-1 border-gray-700 w-full" type="password" placeholder="Password" />
      <Link className="w-full max-w-[371px] h-14 bg-[#DB4444] text-white flex items-center justify-center">Create Account</Link>
      <Link className="w-full max-w-[371px] h-14 text-black border-[2px] mt-[-24px] flex items-center justify-center gap-x-2"><img src={google} className='w-6 h-6' alt="" /> Sign up with Google</Link>
      </form>
      <span className="flex items-center gap-2 mt-8"><p className="text-gray-400">Already have account?</p> <Link className="text-black underline" to='/login'>Log in</Link></span>
    </div>
    </div>
  )
}

export default SignUp