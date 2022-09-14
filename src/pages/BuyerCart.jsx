import React, { useState, useEffect } from "react"

import CartItem from "../components/CartItem";

const BuyerCart = () => {


    const [cart_list, setCart_list] = useState(null)

    const [refresh, setrefresh] = useState(false)

    useEffect(() => {
        getAllItems()
    }, [refresh])

    const getAllItems = async () => {

    }


    return (
        <div className="m-5 md:m-10 mt-24 p-1 md:p-10 bg-white rounded-3xl">

            <div className="bg-white">
                <div className="mx-auto max-w-2xl py-4 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Buyer cart</h2>
                    {
                        cart_list.length === 0 ? 
                        <div className="font-medium text-xl text-slate-500 w-full h-40 flex justify-center items-center ">
                            Cart is empty 😜🤔😜
                        </div>
                        :
                        cart_list?.map((item, index) => (
                            <div key={index}>
                                <CartItem item={item} onsuccess={()=>setrefresh(!refresh)}/>
                            </div>
                        ))

                    }
                       
                       
                </div>
            </div>
        </div>
    )
}

export default BuyerCart