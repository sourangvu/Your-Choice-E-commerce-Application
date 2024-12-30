import { createBrowserRouter } from "react-router-dom";
import { UserLayout } from "../layouts/UserLayout";
import { Home } from "../pages/user/Home";
import { About } from "../pages/user/About";
import { Contact } from "../pages/user/Contact";
import { ProductsPage } from "../pages/user/ProductsPage";
import { ProductDetailsPage } from "../pages/user/ProductDetailsPage";
import { ErrorPage } from "../pages/shared/ErrorPage";
import { Cart } from "../pages/user/Cart";
import { Checkout } from "../pages/user/Checkout";
import { Order } from "../pages/user/Order";
import { ProfilePage } from "../pages/user/ProfilePage";
import { Signup } from "../pages/shared/Signup";
import { Login } from "../pages/shared/Login";
import { Logout } from "../pages/shared/Logout";


export const router = createBrowserRouter([
    {
      path: "",
      element: <UserLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "",
          element: <Home/>
        },
        {
          path: "about",
          element: <About/>
        },
        {
          path: "profile",
          element: <ProfilePage/>
        },
        {
          path: "contact",
          element: <Contact/>
        },
        {
          path: "signup",
          element: <Signup/>
        },
        {
          path: "login",
          element: <Login/>
        },
        {
          path: "logout",
          element: <Logout/>
        },
        {
          path: "products",
          element: <ProductsPage/>
        },
        {
          path: "productDetails/:id",
          element: <ProductDetailsPage/>
        },
        {
          path: "cart",
          element: <Cart/>
        },
        {
          path: "order",
          element: <Order/>
        },
        {
          path: "checkout",
          element: <Checkout/>
        },
        
      ]
    },
    
  ]);