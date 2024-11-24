'use client'

import { useEffect, useState } from "react"

const Cart = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const cartItems = Object.keys(localStorage)
        const finalCartItems = cartItems.map(cartItem => ({
            name: cartItem.split(' - ')[0],
            size: cartItem.split(' - ')[1],
            date: cartItem.split(' - ')[2],
            count: localStorage.getItem(cartItem)
        }))
        setOrders(_ => finalCartItems)
    }, [])

    return (
        <div>
            {orders.map(order => (
                <div key={order.date}>
                    <div>{order.name}</div>
                    <div>{order.size}</div>
                    <div>{order.count}</div>
                </div>
            ))}
        </div>
    )
}

export default Cart