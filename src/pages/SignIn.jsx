//?rrd
import { Link } from "react-router-dom";
//?local--img
import {  signIn } from "../assets";
import {useForm} from 'react-hook-form'
 
const SignIn = () => {
  const { register, handleSubmit, resetField } = useForm({
    initialVal:{
      username: '',
      password: ''
    }
  })
  function signInUser(data) {
    console.log(data);
    resetField('username')
    resetField('password')
  }
  return (
    <div className="myContainer py-[70px] flex  justify-around">
      <div className="w-full max-w-[805px] h-[581px]">
        <img src={signIn} className="h-[550px] w-full max-w-[900px]" />
      </div>
      <div>
        <h1 className="text-[36px] font-bold tracking-[1.44px] mb-6">
          Log in to Exclusive
        </h1>
        <p className="mb-12">Enter your details below</p>
        <form onSubmit={handleSubmit(signInUser)} className="flex flex-col gap-y-10">
          <input
            {...register('username')}
            className="border-b-2 outline-none pb-1 border-gray-700 w-full"
            type="text"
            placeholder="Email or Phone Number"
          />
          <input
            {...register('password')}
            className="border-b-2 outline-none pb-1 border-gray-700 w-full"
            type="password"
            placeholder="Password"
          />
          <span className="flex items-end justify-between">
            <button className="w-full max-w-[143px] h-[56px] bg-[#DB4444] text-white flex items-center justify-center">
              Log In
            </button>
            <p className="text-[#DB4444]">Forget Password?</p>
          </span>
        </form>
        <span className="flex items-center gap-2 mt-8">
          <p className="text-gray-400">Already have not account?</p>{" "}
          <Link className="text-black underline" to="/signup">
            Sign Up
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SignIn;
