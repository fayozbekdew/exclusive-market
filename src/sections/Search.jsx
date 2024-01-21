//?react
import { useContext } from "react";
//?local img
import { Empty_cart2 } from "../assets";
//?component
import { Button, Card, Intro } from "../components";
//?reducer
import { StoreContext } from "../context/ProductReducer";
//?db
import { productDb } from "./MostSales";

function Search() {
  let { searchText } = useContext(StoreContext);
  const searchDb = productDb.filter((item) => {
    return searchText.toLowerCase() === ""
      ? ""
      : item.name.toLowerCase().includes(searchText);
  });
  return (
    <div className="myContainer flex items-center flex-col">
      {searchDb.length !== 0 ? (
        <>
          <div className="w-full flex items-center justify-between mt-10 mx-auto">
            <Intro name="Search result" />
            <Button name="Back to Home" link="/" />
          </div>
          <ul className="flex items-center flex-wrap mt-10 mb-20 justify-around gap-6">
            {searchDb.map((item) => {
              return (
                <div className="" key={crypto.randomUUID()}>
                  <Card discount favorite data={item} />
                </div>
              );
            })}
          </ul>
        </>
      ) : (
        <div className="py-20 flex flex-col items-center">
          <img
            src={Empty_cart2}
            className="w-full max-w-[600px] h-[250px] mb-10"
          />
          <p className="text-[40px] text-[#DB4444]  font-bold capitalize">
            no such product exists
          </p>
        </div>
      )}
    </div>
  );
}

export default Search;
