import React, { useEffect } from 'react';
import { BsFillBagHeartFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShoes } from '../redux-toolkit/slices/dataSlice';

const Card = () => {

  const dispatch = useDispatch();
  const shoes = useSelector((state) => state.shoes);
  const selectedCategory = useSelector((state) => state.category); // Seçilen kategoriyi alma
  const filterItem = useSelector((state) => state.filterItem); // Filtreleme için input değerini alma
  const selectedPrice = useSelector((state) => state.price); // Seçilen fiyatı alma



  useEffect(() => {
    dispatch(fetchShoes());
  }, []);



  const filterData = shoes.data.filter(item => {
    const itemPrice = parseInt(item.price);

    if ((selectedCategory === 'All Products' || item.category.toLowerCase() === selectedCategory.toLowerCase()) && (filterItem === '' || item.title.toLowerCase().includes(shoes.filterItem.toLowerCase())) && ((selectedPrice === "") || (selectedPrice === "50" && itemPrice <= 50) || (selectedPrice === "50-150" && itemPrice >= 50 && itemPrice <= 150) || (selectedPrice === "150+" && itemPrice > 150))
    ) {
      return true
    }
    return false
  })


  return (
    <>
      {filterData.map((item) => {
        return (
          <section className='card' key={item.id}>
            <img src={item.image} alt='Shoe' className='card-img' />
            <div className='card-details'>
              <h3 className='card-title'>{item.title}</h3>
              <section className='card-price'>
                <div className='price'>${item.price}</div>
                <div className='bag'>
                  <BsFillBagHeartFill className='bag-icon' />
                </div>
              </section>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Card;
