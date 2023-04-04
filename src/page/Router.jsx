import { createBrowserRouter } from "react-router-dom"
import AppRoot from "./AppRoot"
import Home from "./Home"
import Category from "./Category"
import Product from "./Product"
import Order from "./Order"
import About from "./About"
import Login from "./Login"
import PageNotFound from "./PageNotFound"
import { loaderProduct } from "../fetchs/FetchsData"
import ProductSingle from "./ProductSingle"

const router = createBrowserRouter([
    {path:'/' , element: <AppRoot/>,children:[ 
        {path:'', index: true, element: <Home/>},
        {path:'category', element: <Category/>},
        {path:'product', element: <Product/>, loader: loaderProduct},
        {path:'product/:id', element:<ProductSingle/>},
        {path:'order', element: <Order/>},
        {path:'about', element: <About/>},
        {path:'login', element: <Login/>},
    ]},
    {path: '*',element:<PageNotFound/>}
])

export default router