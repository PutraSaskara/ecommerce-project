import React from 'react'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import CartTotals from './CartTotals'
import './carcontent.scss'
const   CartItems = () => {
  const { cart, clearCart } = useCartContext()

  return (
    <div className='w-[100%] mt-[150px]'>
      <CartColumns/>
      {
      //map products and each return product info wrapped in article tag

      cart && cart.map(prod => {
        return (
          <div className='div-main'>
            <CartItem
            id={prod.id}
            image={prod.image}
            name={prod.name}
            price={prod.price}
            color={prod.color}
            amount={prod.amount}
            />
          </div>
        )
      })}
      
      <CartTotals/>
    </div>
  )
}

export default CartItems
