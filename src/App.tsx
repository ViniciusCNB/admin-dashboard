import Footer from "./components/footer/Footer"
import Menu from "./components/menu/Menu"
import NavBar from "./components/navbar/NavBar"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Products from "./pages/products/Products"
import Users from "./pages/users/Users"
import User from "./pages/user/User"
import Product from "./pages/product/Product"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom"
import "./styles/global.scss"

const App = () => {
  const Layout = () => {
    return (
      <div className="main">
        <NavBar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
