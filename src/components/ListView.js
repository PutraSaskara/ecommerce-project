import React from 'react'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import './listview.css'
import Product from './Product'

const ListView = ({ products }) => {
  return (
    <section className='div-con'>
      {
      //map products and each return product info wrapped in article tag

      products && products.map(prod => {
        const {id, image, name, price, description} = prod
        return (
          <div className='div-main'>
            <div className='div-card container'>
            <img src={image}/>
            </div>
            <div className='con-description'>
              <div className='div-description'>
                <h4 className='p-name'>{name}</h4>
                <h5 className='p-price'>{price}</h5>
                <p>{description}</p>
                <div className='div-btn'>
                  <Link className='btn ' to={`/products/${id}`}>Details</Link>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </section>	
  )
}

export default ListView
