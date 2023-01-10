import { createSlice } from "@reduxjs/toolkit";

const initialState: any[] = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => {
            const itemInCart = state.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                const tempProduct = { ...action.payload }
                state.push(tempProduct)
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.find((item) => item.id === action.payload);
            item.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item = state.find((item) => item.id === action.payload);
            if (item.quantity > 1) {
                item.quantity--;
            }
        },
        remove: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    }
})
export const { add, remove, incrementQuantity, decrementQuantity } = cartSlice.actions;
export const cartItem = (state:any) =>  state.cart;
export default cartSlice.reducer;