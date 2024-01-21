import { Link } from "react-router-dom";

function Products() {
  return (
    <div className="myContainer">
      <span className="flex items-center gap-x-[4px] my-20">
        <Link className="text-[14px] text-gray-500" to="/">
          Home
        </Link>
        /
        <Link className="font-semibold" to="/contact">
          Contact
        </Link>
      </span>
    </div>
  );
}

export default Products;
