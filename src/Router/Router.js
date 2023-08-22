import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../component/Home.js/Home";
import Singup from "../Pages/Singup/Singup";
import LogIn from "../Pages/LogIn/LogIn";


const router=createBrowserRouter([
    {path:'/',element:<Main></Main>,
    children:[
        {path:'/',element:<Home></Home>},
        {path:'/singup',element:<Singup></Singup>},
        {path:'/login',element:<LogIn></LogIn>}
    ]
}

])

export default router;

