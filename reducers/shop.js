import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
};

export const shop = createSlice({
    name: 'shop',
    initialState,

    reducers: {
        addToCart: (state, action) => {
            state.value.push(action.payload);
        },

        removeFromCart : (state, action) => {
            state.value = state.value.filter((e) => e.title !== action.payload.title);
        }

    },
});

export const { addToCart, removeFromCart } = shop.actions;
export default shop.reducer;


