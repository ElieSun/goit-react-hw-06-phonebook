import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        setFilter(state, action) {
            state = action.payload;
            return state
        },
    },
});

export const filterReducer = filterSlice.reducer;

export const {setFilter} = filterSlice.actions;