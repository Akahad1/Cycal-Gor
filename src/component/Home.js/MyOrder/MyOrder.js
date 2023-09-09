import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvidor/AuthProvider';
import OrderDetails from './OrderDetails';

const MyOrder = () => {
    const [orders, setOrders] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`https://cycal-server-akahad1.vercel.app/order?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])
    console.log(orders)
    return (
        <div>
            <p className='text-center text-2xl font-style mt-10'>Your Oders</p>
            <div className='min-h-screen lg:ml-10 ml-2 mr-2 mb-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                {orders.map(order => <OrderDetails order={order}
                    key={order._id}></OrderDetails>)}

            </div>


        </div>
    );
};

export default MyOrder;