import React from 'react'
import { formatPrice } from '../utils/helpers'
import AmountButtons from './AmountButtons'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
import CartColumns from './CartColumns'
const CartItem = ({ id, image, name, color, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext()
  
  const increase = () => {
    toggleAmount(id, 'inc')
   
  }
  const decrease = () => {
    toggleAmount(id, 'dec')
    
  }

  return (
    <div className='flex w-[100%] h-[100px] mt-[10px] m-auto'>
        <div className='w-[300px]  flex space-x-2 m-auto'>
          <img src={image} className='h-[100px] w-[50%]'/>
          <div className='w-[50%] '>
            <h5 className='text-sm'>{name}</h5>
            <div className='flex w-[100%] space-x-2'>
              <h5 className='text-sm'>Color: </h5>
            <button style={{background: color}} className='w-[35px] rounded-full'></button>
            </div>
          </div>
        </div>
        <div className='w-[250px]  text-center m-auto'>
        <h5 className='text-sm mt-[15%]'>{price}</h5>
        </div>
        <div className='w-[250px] m-auto'>
          <div className='w-[50%] m-auto mt-[15%]'>
          <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
          />
          </div>
        </div>
        <div className='w-[250px] text-center m-auto'>
          <h5 className='text-sm mt-[15%]'>{price * amount}</h5>
        </div>
        <div className='w-[100px] m-auto'>
          <div className='w-[50%] m-auto mt-[35%] text-center'>
            <button onClick={() => removeItem(id)}><FaTrash/></button>
          </div>
        </div>
      </div>
      
  )
}

export default CartItem
