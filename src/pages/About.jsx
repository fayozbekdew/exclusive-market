import {  useState } from "react"
import { Link } from "react-router-dom"
import { bagBlack, bagWhite, CoinBlack, CoinWhite, customService, delivery, designerImg, directorImg, founderImg, guarantee, instagram, linkedin, managerImg, marketBlack, marketWhite, 
  moneyBagBlack, moneyBagWhite, twitter } from "../assets"
  import Carousel from "react-multi-carousel";
  import "react-multi-carousel/lib/styles.css";

  const   aboutDb = [
  {name:'10.5k ', text:"Sallers active our site", imgWhite:marketWhite,imgBlack: marketBlack },
  {name:'33k ', text:"Mopnthly Produduct Sale", imgWhite:CoinWhite,imgBlack: CoinBlack },
  {name:'45.5k ', text:"Customer active in our site", imgWhite:bagWhite,imgBlack: bagBlack },
  {name:'25k ', text:"Anual gross sale in our site", imgWhite:moneyBagWhite,imgBlack: moneyBagBlack },
]
  const employee = [
    {name:'Tom Cruise',img:founderImg, task: 'Founder & Chairman', social: [{img:twitter, link:'#'},
    {img:instagram, link:'#'},{img:linkedin, link:'#'}
  ]},
  {name:'Emma Watson',img:managerImg, task: 'Managing Director', social: [{img:twitter, link:'#'},
    {img:instagram, link:'#'},{img:linkedin, link:'#'}
  ]},
  {name:'Will Smith',img:designerImg, task: 'Product Designer', social: [{img:twitter, link:'#'},
    {img:instagram, link:'#'},{img:linkedin, link:'#'}
  ]},
  {name:'Tom Cruise',img:founderImg, task: 'Founder & Chairman', social: [{img:twitter, link:'#'},
  {img:instagram, link:'#'},{img:linkedin, link:'#'}
]},
{name:'Emma Watson',img:managerImg, task: 'Managing Director', social: [{img:twitter, link:'#'},
  {img:instagram, link:'#'},{img:linkedin, link:'#'}
]},
{name:'Will Smith',img:designerImg, task: 'Product Designer', social: [{img:twitter, link:'#'},
  {img:instagram, link:'#'},{img:linkedin, link:'#'}
]}
  ]

const About = () => {
  const [hover, setHover] = useState(false)

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="myContainer pb-[142px]">
      <span className="flex items-center gap-x-[4px] my-20">
       <Link className="text-[14px] text-gray-500" to='/'>Home</Link>/
       <Link className="font-semibold" to='/contact'>Contact</Link>
      </span>
      <div className="h-[609px] flex items-center justify-between pb-32">
        <div className="w-[525px]">
          <h1 className="text-[54px] font-medium leading-[64px] tracking-[3.24px]">Our Story</h1>
          <p className="text-[16px] w-full max-w-[505px] leading-[26px] mt-10 mb-6">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
          <p className="text-[16px]  w-full max-w-[505px] leading-[26px] font-normal">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        <div className="bg-[#EB7EA8] flex items-end justify-end h-[600px] w-[705px] rounded-sm">
          <img src={directorImg} className='w-[510px] h-[513px]' />
        </div>
      </div>
      <ul className="flex items-center mb-[140px] gap-x-[34px]">
        {aboutDb.map( item => {
          return(
          <li onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}  className={` w-[270px] h-[230px] transition-all flex items-center group hover:bg-[#DB4444] hover:text-white hover:scale-[1.01] justify-center flex-col rounded-md border aboutItem`} key={crypto.randomUUID()}>
          <small className="flex items-center justify-center h-[70px] w-[70px] border-[8px] border-gray-400 rounded-full bg-black mb-6 group-hover:bg-white group-hover:border-gray-200">
            <img src={`${hover  ? item.imgBlack : item.imgWhite}`} className={` h-10 w-10 `} alt="" />
          </small>
          <h2 className="text-[32px] font-bold leading-[30px] tracking-[1.28px] mb-2">{item.name}</h2>
          <p className="text-[16px] ">{item.text}</p>
          </li>
          )
        })}
      </ul>
      <Carousel 
      className="mt-[31px] mb-16 pb-14 flex-col aboutSlider"
      responsive={responsive}
      arrows={false}
    //   customButtonGroup={<ButtonGroup />}
      infinite={true}
      autoPlay={true}
      showDots={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      >
        {employee.map( employee => {
            return(
           <div key={crypto.randomUUID()} className='w-[350px] h-[564px]' >
            <div className=" flex items-end justify-center h-[430px] bg-[#F5F5F5]">
              <img src={employee.img} className="h-[390px] w-[254px]" />
            </div>
            <h3 className="text-[32px] font-medium tracking-[1.28px] mt-8">{employee.name}</h3>
            <p className="">{employee.task}</p>
            <ul className="flex items-center gap-4 mt-2">
              {employee.social.map((social) => {
                return(
                  <a href={social.link} key={crypto.randomUUID()}>
                    <img className="w-6 h-6" src={social.img} />
                  </a>
                )
              })}
            </ul>
           </div>
            )
        })}
      </Carousel>
      <ul className="flex items-center justify-center gap-x-[88px] mt-32">
        <li className="w-[250px] h-[160px] flex items-center justify-center flex-col">
        <img src={delivery} className="w-16 h-16 bg-black rounded-full border-gray-400 border-[8px]" alt="" />
        <h3 className="text-[20px] font-semibold mt-6 leading-[28px]">FREE AND FAST DELIVERY</h3>
        <p className="text-[14px] text-gray-600">Free delivery for all orders over $140</p>
        </li>
        <li className="w-[250px] h-[160px] flex items-center justify-center flex-col">
        <img src={customService} className="w-16 h-16 bg-black rounded-full border-gray-400 border-[8px]" alt="" />
        <h3 className="text-[20px] font-semibold mt-6 leading-[28px]">24/7 CUSTOMER SERVICE</h3>
        <p className="text-[14px] text-gray-600">
Friendly 24/7 customer support</p>
        </li>
        <li className="w-[250px] h-[160px] flex items-center justify-center flex-col">
        <img src={guarantee} className="w-16 h-16 bg-black rounded-full border-gray-400 border-[8px]" alt="" />
        <h3 className="text-[20px] font-semibold mt-6 leading-[28px]">MONEY BACK GUARANTEE</h3>
        <p className="text-[14px] text-gray-600">We reurn money within 30 days</p>
        </li>
      </ul>
    </div>
  )
}

export default About