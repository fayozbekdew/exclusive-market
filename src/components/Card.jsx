import { MdFavoriteBorder } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";

const Card = ({ data, discount }) => {
  return (
    <div key={data.id} className="w-[270px] h-[350px]  flex flex-col ">
      <div className="w-[270px] h-[250px] bg-[#F5F5F5] flex items-center justify-center relative">
        <img src={data.img} alt="product img" className="h-[152px] w-[172px]" />
        <span className="flex flex-col items-center gap-y-1 absolute right-3 top-2">
          <button className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
            <MdFavoriteBorder className="w-[22px] h-[22px]" />
          </button>
          <button className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
            <IoEyeOutline className="w-[22px] h-[22px]" />
          </button>
        </span>
        {discount ? <button className="w-[55px] h-[26px] rounded-md text-white bg-[#DB4444] flex items-center justify-center absolute left-2 top-2 ">
        -{data.discount ? data.discount : 0}%
        </button> : ''}
      </div>
      <div className="flex flex-col gap-y-2 mt-3">
        <h4 className="font-semibold text-[16px] leading-[24px] uppercase">
          Product name
        </h4>
        <small className="flex items-center gap-x-2">
          <p className="text-[#DB4444] text-[16px] font-semibold">
            ${data.nowPrice}
          </p>
          <p className="line-through text-gray-400 text-[16px] font-semibold">
            ${data.oldPrice ? data.oldPrice : ""}
          </p>
        </small>
        <div className="flex items-center">
          {data.rate.map((star) => {
            return (
              <div key={data.id}>
                <img src={star} className="h-5 w-5" alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
