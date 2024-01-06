import { Fragment } from "react"
import { Button, Card, Intro } from "../components"
import { productDb } from "./MostSales"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OurProducts = () => {
  return (
    <div className="myContainer mt-20 mb-32">
      <ToastContainer autoClose={1000} pauseOnHover={false} theme="light" />
    <Intro name={'Our Products'}/>
    <div className="mt-7">
    <h2 className="text-[36px] font-semibold leading-[48px] text-black mr-[87px]">
    Best Selling Products
      </h2>
    </div>
    <ul className="flex items-center flex-wrap justify-between gap-x-7 gap-y-14 py-14">
        {productDb.map(item => {
            return(
                <Fragment key={crypto.randomUUID()}>
                  <Card toast={toast} favorite data={item}/>
                </Fragment>
            )
        })}
    </ul>
    <Button center name='View All Products' link='#'/>
    </div>
  )
}

export default OurProducts