import React from 'react'

const priceInput = (props) => {
  return (
    <label className="sidebar-label-container">
      <input type="radio" name='test' />
      <span className='checkmark'></span>{props.price}
    </label>
  )
}

export default priceInput