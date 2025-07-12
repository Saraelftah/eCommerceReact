import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    totalCount: 0,
    cartItem: [],
};

export const countSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increament: (state) => {
            state.totalCount = state.totalCount + 1;
        },

        decreament: (state) => {
            if (state.totalCount > 1) {
                state.totalCount = state.totalCount - 1;
            }
        },
        addCart: (state, action) => {
            // console.log(action,state.cartItem);
            const foundEle = state.cartItem?.find(
                (p) => p?.id === action?.payload?.id
            );
            if (foundEle) {
                state.cartItem = state.cartItem.map((p) => ({
                    ...p,
                    count: p?.id === action.payload.id ? p?.count + 1 : p?.count
                }));

            } else {
                state.cartItem = [...state.cartItem, { ...action.payload, count: 1 }];
            }
        },
        removeFromCart: (state, action) => {
            const foundEle = state.cartItem?.find(
                (p) => p?.id === action?.payload?.id
            );
            if (foundEle) {
                if (foundEle?.count === 1) {
                    state.cartItem = state.cartItem.filter((p) =>
                        p.id !== action.payload.id
                    )
                } else if (foundEle.count > 1) {
                    state.cartItem = state.cartItem.map((p) =>
                        p.id === action.payload.id ? {
                            ...p,
                            count: p.count - 1
                        } : p)
                }
            }
            state.totalCount = state.totalCount - 1;
        },
    }
})
export const countReducer = countSlice.reducer;
export const { increament, decreament, addCart, removeFromCart } = countSlice.actions;