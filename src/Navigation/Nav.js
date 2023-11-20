import React from 'react'
import './Nav.css'

import {FiHeart} from 'react-icons/fi'
import {AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai'

import { useDispatch } from 'react-redux'
import { setFilterItem } from '../redux-toolkit/slices/dataSlice'

const Nav = () => {
  const dispatch = useDispatch();

  const handleInputChange=(e)=>{
    const inputValue = e.target.value;
    dispatch(setFilterItem(inputValue))
  }
  
  return (
    <nav>
      <div className='nav-container'>
        <input type="text" className='search-input' placeholder='Enter your search shoes'  onChange={handleInputChange} />
      </div>
      <div className='profile-container'>
        <a href="#"><FiHeart className='nav-icons' /></a>
        <a href="#"><AiOutlineShoppingCart className='nav-icons' /></a>
        <a href="#"><AiOutlineUserAdd className='nav-icons' /></a>
      </div>
      
    </nav>
  )
}

export default Nav