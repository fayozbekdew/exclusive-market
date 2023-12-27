//react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import { ErrorElement } from "./components";
import { LanguageProvider } from "./context/LanguageContext";
import HomeLayout from "./layout/HomeLayout";
import { About, Contact, Error, Home, SignUp } from "./pages";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          errorElement: <ErrorElement />,
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

