import { configureStore } from '@reduxjs/toolkit'
import shoesSlice from './slices/dataSlice'
import categorySlice from './slices/categorySlice'
import priceSlice from './slices/priceSlice'


export const store = configureStore({
  reducer: {
    shoes: shoesSlice,
    category: categorySlice,
    price: priceSlice
  },
})