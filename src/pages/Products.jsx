import { Link } from "react-router-dom"
import { Categories } from "../sections"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Product = () => {
  return (
    <div className="myContainer">
      <p className="text-center text-[30px] my-6">Latest product</p>
      <hr className="mb-0" />
      <Categories/>
    </div>
  )
}

export default Product