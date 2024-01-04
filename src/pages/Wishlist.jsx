import { useContext } from "react"
import { Fragment } from "react"
import { Empty_cart, product1, product2, product3, product4, star } from "../assets"
import { Button, Card, Intro } from "../components"
import { StoreContext } from "../context/ProductReducer"

const wishlistData  = [
    { id: 1, img: product1,price:120, oldPrice:160, rate: [star,star,star,star],discount:50 },
    { id: 2, img: product2,price:140, oldPrice:180, rate: [star,star,star,star ,star],discount:40},
    { id: 3, img: product3,price:120, oldPrice:160, rate: [star,star,star],discount:45 },
    { id: 4, img: product4, price:120, oldPrice:160, rate:[star,star,star,star], discount:30 }
]
function Wishlist() {
    //context
    const {favoritList,addToBasket} = useContext(StoreContext)
    function allAddBasket(){
        favoritList.forEach(item => addToBasket(item))
        
    }
  return (
    <div className="myContainer py-20">
    {favoritList.length !== 0 
    ? <>
    <span className="flex items-center justify-between mb-14">
        <small className="flex items-center font-medium text-[20px]">
        Wishlist ( <p>{favoritList.length}</p> )
        </small>
        <button onClick={allAddBasket} className="w-full max-w-[223px] h-14 border-gray-700 border flex items-center justify-center font-medium">
        Move All To Bag
        </button>
    </span>
    <ul className={`${favoritList.length < 3 ? 'justify-start' : 'justify-evenly'} flex items-center gap-7   flex-wrap mb-20`}>
        {favoritList && favoritList.map(item  => {
            return(
                <Fragment key={crypto.randomUUID()}>
                    <Card wishlist data={item}/>
                </Fragment>
            )
        })}
    </ul>
    <Intro name='Just For You'/>
    <ul className="flex items-center gap-x-7 justify-center mt-14 mb-20">
        {wishlistData.map(item  => {
            return(
                <Fragment key={crypto.randomUUID()}>
                    <Card data={item}/>
                </Fragment>
            )
        })}
    </ul>
    </> 
    : 
    <div className="mt-[-80px] flex items-center justify-center flex-col">
        <img src={Empty_cart} className='w-[500px] h-[500px]' alt="empty cart img" />
        <Button name='Back to shopping' link='/'/>
    </div>
    }
    </div>
  )
}

export default Wishlist