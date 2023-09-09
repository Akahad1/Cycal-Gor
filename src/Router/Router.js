import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../component/Home.js/Home";
import Singup from "../Pages/Singup/Singup";
import LogIn from "../Pages/LogIn/LogIn";
import AllProduct from "../component/Home.js/AllProduct/AllProduct";
import MyCart from "../component/MyCart/MyCart";
import SpecificBike from "../component/SpecificBike/SpecificBike";
import BuyLayout from "../Main/BuyLayout";
import BuyNow from "../component/Home.js/BuyNow/BuyNow";
import Blogs from "../component/Home.js/Blogs/Blogs";
import PriviteRoute from "./PriviteRoute";
import MyOrder from "../component/Home.js/MyOrder/MyOrder";



const router=createBrowserRouter([
    {path:'/',element:<Main></Main>,
    children:[
        {path:'/',element:<Home></Home>},
        {path:'/blog',element:<Blogs></Blogs>},
        {path:'/singup',element:<Singup></Singup>},
        {path:'/login',element:<LogIn></LogIn>},
        {path:"/allproduct",element:<AllProduct></AllProduct>,
        loader: async()=>fetch('https://cycal-server-akahad1.vercel.app/totalproducts')
    },
    {path:'/myorder',element:<PriviteRoute><MyOrder></MyOrder></PriviteRoute>},

    {path:'/:id',element:<SpecificBike></SpecificBike>,
    loader: async({params})=>fetch(`https://cycal-server-akahad1.vercel.app/products/${params.id}`)
},
    {path:'/allproduct/:id',element:<SpecificBike></SpecificBike>,
    loader: async({params})=>fetch(`https://cycal-server-akahad1.vercel.app/products/${params.id}`)
}
    
    ]
},
{path:'/buy',element:<BuyLayout></BuyLayout>,
children:[
    {path:'/buy/:id',element:<PriviteRoute><BuyNow></BuyNow></PriviteRoute>,
    loader: async ({params})=>fetch(`https://cycal-server-akahad1.vercel.app/products/${params.id}`)
},
{path:'/buy/myCart',element:<PriviteRoute><MyCart></MyCart></PriviteRoute>},

    

]
}
,{path: '*' ,element: 'You Press Rong route'}
])

export default router;

