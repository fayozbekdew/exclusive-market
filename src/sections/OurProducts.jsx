import { Fragment } from "react"
import { product1, product2, product3, product4, product5, product6, product7, product8, star } from "../assets"
import { Button, Card, Intro } from "../components"
const ourProduct = [
    { id: 1, img: product1,nowPrice:120,  rate: [star,star,star,star] },
    { id: 2, img: product2,nowPrice:140,  rate: [star,star,star,star ,star]},
    { id: 3, img: product3,nowPrice:120,  rate: [star,star,star] },
    { id: 4, img: product4, nowPrice:120,  rate:[star,star,star,star], },
    { id: 5, img: product5,nowPrice:120,  rate:[star,star,star,star, star], },
    { id: 6, img: product6,nowPrice:120,  rate: [star,star,star]},
    { id: 7, img: product7, nowPrice:120,  rate: [star,star,star, star,star] },
    { id: 8, img: product8,nowPrice:120,  rate: [star,star,star,star]},
]


const OurProducts = () => {
  return (
    <div className="myContainer mt-20 mb-32">
    <Intro name={'Our Products'}/>
    <div className="mt-7">
    <h2 className="text-[36px] font-semibold leading-[48px] text-black mr-[87px]">
    Best Selling Products
      </h2>
    </div>
    <ul className="flex items-center flex-wrap justify-between gap-x-7 gap-y-14 py-14">
        {ourProduct.map(item => {
            return(
                <Fragment key={crypto.randomUUID()}>
                  <Card data={item}/>
                </Fragment>
            )
        })}
    </ul>
    <Button name='View All Products' link='#'/>
    </div>
  )
}

export default OurProducts