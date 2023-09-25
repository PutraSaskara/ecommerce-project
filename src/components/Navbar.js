import React from 'react'
import logo from '../assets/cek-toko-sebelah.png'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'
import './navbar.css'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'


const Nav = () => {
  const { openSidebar } = useProductsContext()
  const { myUser, userState, logout, login } = useUserContext()
  return (
      <div className='nav-center'>
        <div className='nav-header'>
          <a href='/' className='nav-logo'>
            <img src={logo} alt='logo' className='nav-logo'/>
          </a>
        </div>
        <ul className='nav-links'>
          <li><Link to='/'>home</Link></li>
          <li><Link to='/about'>about</Link></li>
          <li><Link to='/products'>products</Link></li>
        </ul>
        <CartButtons />
      </div>
  )
}


export default Nav
