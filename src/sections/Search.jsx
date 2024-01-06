import { useContext } from "react"
import { Button, Card, Intro } from "../components"
import { StoreContext } from "../context/ProductReducer"
import { productDb } from "./MostSales"

function Search() {
  let { searchText } = useContext(StoreContext)
  console.log(searchText)
  return (
    <div className="myContainer flex items-center flex-col">
      <div className="w-full flex items-center justify-between mt-10 mx-auto">
        <Intro name='Search result'/>
        <Button name='Back to Home' link='/'/>
      </div>
      <ul className="flex items-center flex-wrap mt-10 mb-20 justify-around gap-6">
      {productDb.filter(item => {
        return searchText.toLowerCase() === '' 
        ? ''
        : item.name.toLowerCase().includes(searchText);
      }).map(item => {
        return(
          <div className="" key={crypto.randomUUID()}>
            <Card discount favorite  data={item}/>
          </div>
        )
      })}
      </ul>
    </div>
  )
}

export default Search