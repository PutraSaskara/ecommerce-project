import React from 'react'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
const CartTotals = () => {
  const { total_amount, shipping_fee, clearCart } = useCartContext()
  const { myUser, loginWithRedirect } = useUserContext()
  const handleClearCart = () => {
    clearCart()
  }

  return (
    <div>
        <div className='flex justify-between px-16'>
          <div className='w-[200px] bg-amber-800 rounded-lg'>
            <button className='w-full font-semibold text-white'><Link to='/products' className='w-full font-semibold text-white'>Continue Shopping</Link></button>
          </div>
          <div className='w-[200px] bg-black rounded-lg'>
          <button className='w-full font-semibold text-white'><Link onClick={handleClearCart} className='w-full font-semibold text-white'>Clear Shopping Cart</Link></button>
          </div>
        </div>
        <div className='w-[100%] flex justify-end px-16 py-9'>
          <div>
          <div className=' border-solid border-1 border-blue-300 w-[390px] h-[250px] p-5  '>
          <div className='flex  h-[50%] border-b-4'>
            <div className='m-auto'>
              <h5 className='text-md font-bold'>Subtotal :</h5>
              <h5 className='text-md font-semibold'>Shiping Fee :</h5> 
            </div>
            <div className='m-auto'>
              <h5 className='text-md font-bold'>{total_amount}</h5>
              <h5 className='text-md font-semibold'>{shipping_fee}</h5>
            </div>
          </div>
          <hr/>
          <div className='flex   h-[50%]'>
            <div className='m-auto'>
              <h5 className='text-xl'>Order Total :</h5>
            </div>
            <div className='m-auto'>
              <h5 className='text-xl'>{total_amount + shipping_fee}</h5>
            </div>
          </div>
          </div>
          <button className='w-full bg-slate-500 mt-4  hover:bg-slate-800' type="button" onClick={loginWithRedirect}><Link to="/login" className='text-white font-bold  text-xl'>Login</Link>
          </button>
        </div>

      </div>
    </div>
    
  )
}



export default CartTotals
