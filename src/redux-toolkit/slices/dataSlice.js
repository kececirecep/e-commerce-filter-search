import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchShoes = createAsyncThunk('shoes/fetchShoes',async()=>{
   try{ const response = await axios.get('https://fakestoreapi.com/products')
    return response.data;
} catch (error) {
    throw error;
  }
})

const initialState = {
    data:[],
    status: '',
    error:null,
    filterItem:"",
}

const shoesSlice = createSlice({
    name:'shoes',
    initialState,
    reducers:{
        setFilterItem:(state,action)=>{
            state.filterItem=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchShoes.pending,(state,action)=>{
            state.status = 'loading'
        })
        builder.addCase(fetchShoes.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            state.data = action.payload;
        })
        builder.addCase(fetchShoes.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.error.message;
        })
    }
})

export const { setFilterItem } = shoesSlice.actions;
export default shoesSlice.reducer;