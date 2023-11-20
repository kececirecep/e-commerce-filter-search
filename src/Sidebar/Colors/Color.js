import React from 'react'
import './Color.css'
import Input from '../../components/Input'

const Color = () => {
  return (
    <div>
      <h2 className='sidebar-title color-title'>Color</h2>
      
      <div>
        <Input/>
        <Input/>
        <Input/>
        <Input/>
      </div>
    </div>
  )
}

export default Color