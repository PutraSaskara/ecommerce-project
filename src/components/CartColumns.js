import React from 'react'
const CartColumns = () => {
  return (
    <>
    <div className='flex w-[100%] mt-[100px] m-auto text-center content-end mb-[30px] '>
        <div className='w-[300px] m-auto'>
            <h5 className='text-sm text-gray-500'>Item</h5>  
        </div>
        <div className='w-[250px] m-auto'>
            <h5 className='text-sm text-gray-500 '>Price</h5>
        </div>
        <div className='w-[250px] m-auto'>
            <h5 className='text-sm text-gray-500'>Quantity</h5>
        </div>
        <div className='w-[250px] m-auto'>
            <h5 className='text-sm text-gray-500'>Subtotal</h5>
        </div>
        <div className='w-[100px] bg-slate-500 m-auto'></div>
      </div>
      <hr className='mt-[20px]'/>
    </>
  )
}


export default CartColumns
