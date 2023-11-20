import React from 'react';
import './Recommended.css';
import { useDispatch } from 'react-redux';
import { setCategory } from '../redux-toolkit/slices/categorySlice'; 

const Recommended = () => {
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category)); // Seçilen kategoriyi Redux store'a gönderin
  };

  return (
    <div className=''>
      <h2 className='recommended-title'>Category</h2>
      <div className='recommended-flex'>
        <button className='btns' onClick={() => handleCategoryClick('All Products')}>
          All Products
        </button>
        <button className='btns' onClick={() => handleCategoryClick('jewelery')}>
          Jewelery
        </button>
        <button className='btns' onClick={() => handleCategoryClick('Electronics')}>
          Electronics
        </button>
        <button className='btns' onClick={() => handleCategoryClick("Women's Clothing")}>
          Women's Clothing
        </button>
        <button className='btns' onClick={() => handleCategoryClick("Men's Clothing")}>
          Men's Clothing
        </button>
      </div>
    </div>
  );
};

export default Recommended;
