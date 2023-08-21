import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../component/Home.js/Home";
import Singup from "../Pages/Singup/Singup";


const router=createBrowserRouter([
    {path:'/',element:<Main></Main>,
    children:[
        {path:'/',element:<Home></Home>},
        {path:'/singup',element:<Singup></Singup>},
    ]
}

])

export default router;

