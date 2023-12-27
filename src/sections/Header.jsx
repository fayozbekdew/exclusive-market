const Header = () => {
  return (
   <div className="bg-black">
     <div className="myContainer flex items-center justify-around h-[48px]">
      <span className="flex items-center justify-center gap-x-[8px]">
        <p className="text-[14px] font-normal leading-[21px] text-[#FAFAFA]">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <a
          className="font-semibold text-[#fafaaf] leading-[24px] underline text-[14px]"
          href="#"
        >
          ShopNow
        </a>
      </span>
      <select className="bg-inherit border-none  text-white" name="select">
        <option className="text-black" value="value1" selected>English</option>
        <option className="text-black" value="value2" >
          Russian
        </option>
        <option className="text-black" value="value3">Uzbek</option>
      </select>
    </div>
   </div>
  );
};

export default Header;
