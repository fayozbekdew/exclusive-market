import { Link } from "react-router-dom";
import { camera, computers, gaming, headPhones, phones, smartWatch } from "../assets";
import { Intro } from "../components";

const categoriesList = [
    {id:1,name:'Phones',link:'#', img:phones},
    {id:2,name:'Computers',link:'#', img:computers},
    {id:1,name:'SmartWatch',link:'#', img:smartWatch},
    {id:1,name:'Gaming',link:'#', img:gaming},
    {id:1,name:'Camera',link:'#', img:camera},
    {id:1,name:'HeadPhones',link:'#', img:headPhones},
]

const Categories = () => {
  return (
    <div className="myContainer mt-[80px] border-b-2 pb-14">
      <Intro name={"Categories"} />
      <h2 className="text-[36px] font-semibold leading-[48px] text-black mr-[87px]">
        Browse By Category
      </h2>
      <div className="flex items-center justify-center  ">
      <ul className="flex items-center mt-14 gap-x-[30px]">
        {categoriesList.map(category => {
            return(
            <Link to={category.link} key={category.id} className="w-[170px] h-[145px] rounded-sm border-gray-500 border flex items-center flex-col transition-all justify-center hover:bg-[#DB4444]" >
                <img src={category.img} alt="category  img" />
                <p>{category.name}</p>
            </Link>
            )
        })}
      </ul>
      </div>
    </div>
  );
};

export default Categories;
