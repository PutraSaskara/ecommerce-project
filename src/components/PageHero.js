import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import './pagehero.css'

const PageHero = ({ title, product }) => {
  return (
    <div className='section-hero'>
      <div className='w-[60%] mx-auto my-10 p-5'>
        <h3>
          <Link to='/'>Home </Link>
          {product && <Link to='/products'>/ Products</Link>}/ {title}
        </h3>
      </div>
    </div>
  )
}


export default PageHero
