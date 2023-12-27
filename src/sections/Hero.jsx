import { FaAngleRight } from "react-icons/fa";


const heroSlider = [
    {name:'msdks',
     id:2
    },{name:'sdhdskj',
    id:3
   },{name:'dkskdmskjk',
   id:4
  }
]
const Hero = () => {
  return (
    <div className="myContainer pt-6 flex ">
        <section className="w-full max-w-[180px] h-[344px] border-r-2 border-gray-500 flex flex-col gap-y-[12px] ">
                <li className="flex items-center justify-between w-full max-w-[157px]"><a href="">Woman’s Fashion</a> <FaAngleRight /></li>
                <li className="flex items-center justify-between w-full max-w-[157px]"><a href="">Men’s Fashion</a> <FaAngleRight /></li>
                <li className="flex items-center justify-between w-full max-w-[157px]"><a href="">Electronics</a> <FaAngleRight /></li>
                <li className="flex items-center justify-between w-full max-w-[157px]"><a href="">Home & Lifestyle</a> <FaAngleRight /></li>
                <li className="flex items-center justify-between w-full max-w-[157px]"><a href="">Medicine</a> <FaAngleRight /></li>
                <li className="flex items-center justify-between w-full max-w-[157px]"><a href="">Sports & Outdoor</a> <FaAngleRight /></li>
                <li className="flex items-center justify-between w-full max-w-[157px]"><a href="">Baby’s & Toys</a> <FaAngleRight /></li>
                <li className="flex items-center justify-between w-full max-w-[157px]"><a href="">Groceries & Pets</a> <FaAngleRight /></li>
                <li className="flex items-center justify-between w-full max-w-[157px]"><a href="">Health & Beauty</a> <FaAngleRight /></li>
        </section>
        <section className="bg-slate-400 ">
      
        </section>
    </div>
  )
}

export default Hero