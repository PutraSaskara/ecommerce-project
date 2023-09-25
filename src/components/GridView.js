import React from 'react'
import Product from './Product'
import './gridview.css'

const GridView = ({ products }) => {
  return (
    <section>
      <div className='products-container'>
      {products && products.map(prod => {
            return (
              <div className='div-card1'>
                <Product
                key={prod.id}
                image={prod.image}
                name={prod.name}
                price={prod.price}
                id={prod.id} 
            />
              </div>
            )
          })}
      </div>
    </section>
  )
}

export default GridView
