import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products:[]
}
    
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    productList:(state,action)=> {
      const productsList = action.payload;
       state.products = productsList;
    }
  },
})

export const { productList } = productSlice.actions;
export const productItems = (state:any) => state.product.products;
export default productSlice.reducer;