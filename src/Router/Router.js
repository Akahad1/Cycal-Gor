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


const router=createBrowserRouter([
    {path:'/',element:<Main></Main>,
    children:[
        {path:'/',element:<Home></Home>},
        {path:'/singup',element:<Singup></Singup>},
        {path:'/login',element:<LogIn></LogIn>},
        {path:"/allproduct",element:<AllProduct></AllProduct>,
        loader: async()=>fetch('http://localhost:5000/totalproducts')
    },
    

    {path:'/:id',element:<SpecificBike></SpecificBike>,
    loader: async({params})=>fetch(`http://localhost:5000/products/${params.id}`)
},
    {path:'/allproduct/:id',element:<SpecificBike></SpecificBike>,
    loader: async({params})=>fetch(`http://localhost:5000/products/${params.id}`)
}
    
    ]
},
{path:'/buy',element:<BuyLayout></BuyLayout>,
children:[
    {path:'/buy/:id',element:<BuyNow></BuyNow>,
    loader: async ({params})=>fetch(`http://localhost:5000/products/${params.id}`)
},
{path:'/buy/myCart',element:<MyCart></MyCart>,
    
},
]
}
,{path: '*' ,element: 'You Press Rong route'}
])

export default router;

