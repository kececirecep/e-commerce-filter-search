import React from 'react'
import './Price.css'
import { useDispatch } from 'react-redux'
import { setPrice } from '../../redux-toolkit/slices/priceSlice';

const Price = () => {

  const dispatch = useDispatch();
  const handlePriceChange=(e)=>{
    const selectedPrice = e.target.value;
    dispatch(setPrice(selectedPrice))
  }
  return (
    <div className='ml'>
      <h2 className='sidebar-title price-title'>Price</h2>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" name='test' value="" onChange={handlePriceChange} />
          <span className='checkmark'></span>All
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name='test' value="50" onChange={handlePriceChange} />
          <span className='checkmark'></span>$0-$50
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name='test' value="50-150" onChange={handlePriceChange} />
          <span className='checkmark'></span>$50-$150
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name='test' value="150+" onChange={handlePriceChange} />
          <span className='checkmark'></span>$150 and above
        </label>
      </div>
    </div>
  )
}

export default Price