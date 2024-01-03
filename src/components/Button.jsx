import { Link } from "react-router-dom"

const Button = ({name, link}) => {
  return (
    <Link to={link} className="ButtonEl w-[234px] h-[56px] bg-[#DB4444] flex items-center justify-center rounded-sm  text-white text-[16px] font-semibold leading-[24px] mx-auto" href="#">{name}</Link>
  )
}

export default Button