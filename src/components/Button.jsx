//?react-router-dom
import { Link } from "react-router-dom";

const Button = ({ name, link, center }) => {
  return (
    <Link
      to={link}
      className={`${
        center ? "mx-auto" : "mx-0"
      } ButtonEl w-[234px] h-[56px] bg-[#DB4444] flex items-center justify-center rounded-sm  text-white text-[16px] font-semibold leading-[24px]`}
      href="#"
    >
      {name}
    </Link>
  );
};

export default Button;
