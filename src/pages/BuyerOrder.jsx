import React, { useEffect, useState } from 'react'
import OrdersItem from '../components/OrdersItem'

const BuyerOrder = () => {

    const [order_list, setorder_list] = useState(null)

    useEffect(() => {
      getOrders()
    }, [])

    const getOrders = async () =>{
       
    }
   
    return (
        <div className="m-5 md:m-10 mt-24 p-1 md:p-10 bg-white rounded-3xl">

            <div className="bg-white">
                <div className="mx-auto max-w-2xl py-4 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Buyer cart</h2>
                        {
                            
                            order_list?.map((item, index) => (
                                <div key={index}>
                                    <OrdersItem item={item}/>
                                </div>
                            ))
                        }
                </div>
            </div>
        </div>
    )
}

export default BuyerOrder