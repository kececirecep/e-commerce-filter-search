import React from 'react'
import './Sidebar.css'
 
import Price from './Price/Price' 

const Sidebar = () => {
  return (
    <section className='sidebar'>
        <div class="logo-container">
            <h1>🛒</h1>
        </div>
 
        <Price/> 
    </section>
  )
}

export default Sidebar