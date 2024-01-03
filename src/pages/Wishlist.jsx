import { Fragment } from "react"
import { Link } from "react-router-dom"
import { product1, product2, product3, product4, star } from "../assets"
import { Card, Intro } from "../components"

const wishlistData  = [
    { id: 1, img: product1,nowPrice:120, oldPrice:160, rate: [star,star,star,star],discount:50 },
    { id: 2, img: product2,nowPrice:140, oldPrice:180, rate: [star,star,star,star ,star],discount:40},
    { id: 3, img: product3,nowPrice:120, oldPrice:160, rate: [star,star,star],discount:45 },
    { id: 4, img: product4, nowPrice:120, oldPrice:160, rate:[star,star,star,star], discount:30 }
]
function Wishlist() {
  return (
    <div className="myContainer py-20">
    <span className="flex items-center justify-between mb-14">
        <small className="flex items-center font-medium text-[20px]">
        Wishlist ( <p>4</p> )
        </small>
        <Link className="w-full max-w-[223px] h-14 border-gray-700 border flex items-center justify-center font-medium">
        Move All To Bag
        </Link>
    </span>
    <ul className="flex items-center gap-x-7 justify-center mb-20">
        {wishlistData.map(item  => {
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
    </div>
  )
}

export default Wishlist