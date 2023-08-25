import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../component/Home.js/Home";
import Singup from "../Pages/Singup/Singup";
import LogIn from "../Pages/LogIn/LogIn";
import AllProduct from "../component/Home.js/AllProduct/AllProduct";


const router=createBrowserRouter([
    {path:'/',element:<Main></Main>,
    children:[
        {path:'/',element:<Home></Home>},
        {path:'/singup',element:<Singup></Singup>},
        {path:'/login',element:<LogIn></LogIn>},
        {path:"/allproduct",element:<AllProduct></AllProduct>,
        loader: async()=>fetch('http://localhost:5000/totalproducts')
    },
    
    ]
}

])

export default router;

