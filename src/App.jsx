//react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import { ErrorElement } from "./components";
import { LanguageProvider } from "./context/LanguageContext";
import HomeLayout from "./layout/HomeLayout";
import { About, Basket, Contact, Error, Home, Product, SignIn, SignUp, Wishlist } from "./pages";
import Products from "./pages/Products";
import { Search } from "./sections";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Home  />,
          errorElement: <ErrorElement />,
        },
        {
          path: "/products",
          element: <Products />,
          errorElement: <Error />,
        },
        {
          path: "/products/:id",
          element: <Product />,
          errorElement: <Error />,
        },
        {
          path: "/about",
          element: <About />,
          errorElement: <Error />,
        },
        {
          path: "/contact",
          element: <Contact />,
          errorElement: <Error />,
        },
        {
          path: "/signUp",
          element: <SignUp />,
          errorElement: <Error />,
        },
        {
          path: "/login",
          element: <SignIn />,
          errorElement: <Error />,
        },
        {
          path: "/wishlist",
          element: <Wishlist />,
          errorElement: <Error />,
        },
        {
          path: "/basket",
          element: <Basket />,
          errorElement: <Error />,
        },
        {
          path: "/search",
          element: <Search />,
          errorElement: <Error />,
        }
      ],
      errorElement: <Error />,
    },
  ]);
  return (
    <LanguageProvider>
      <>
        <RouterProvider router={routes} />
      </>
    </LanguageProvider>
  );
}

