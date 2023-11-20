import { createSlice } from "@reduxjs/toolkit";

const priceSlice = createSlice({
    name: "price",
  initialState:"",

    reducers:{
        setPrice:(state,action)=>{
            return action.payload
        }
    }
})

export const {setPrice}=priceSlice.actions;
export default priceSlice.reducer;