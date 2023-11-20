// Yeni bir slice dosyası oluşturun (örneğin, categorySlice.js)
import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: 'All Products', // Varsayılan kategori "All Products"
  reducers: {
    setCategory: (state, action) => {
      return action.payload; // Seçilen kategoriyi güncelle
    },
  },
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;
