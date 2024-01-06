import { BestProducts, Categories, Features, Hero, OurProducts, Search } from "../sections"
import MostSales from "../sections/MostSales"

const Home = (  ) => {
  return (
    <>
    {/* <Search />  */}
    <Hero/>
    <MostSales />
    <Categories/>
    <BestProducts/>
    <OurProducts/>
    <Features/>
    </>
  )
}

export default Home