import { Outlet } from "react-router-dom" 
import { Footer, Header, Navbar } from "../sections"
const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default HomeLayout