import { createSlice } from "@reduxjs/toolkit";

const sliceObject = {
  name: "restaurant",
  initialState: {
    list: []
  },
  reducers: {
    updateList: (state, action) => {
      state.list = action.payload;
    },
    selectRestaurant:(state, action) => {
        state.selected = action.payload;
    }
  },
};
const restaurantSlice = createSlice(sliceObject);

export const { updateList, selectRestaurant } = restaurantSlice.actions;
export default restaurantSlice.reducer;
