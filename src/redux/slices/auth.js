import { createSlice } from "@reduxjs/toolkit";

const sliceObject = {
  name: "auth",
  initialState: {
    loggedIn: false,
    userData: null,
  },
  reducers: {
    login: (state, action) => {
      state.userData = action.payload;
      state.loggedIn = true;
    },
  },
};
const authSlice = createSlice(sliceObject);

export const { login } = authSlice.actions;
export default authSlice.reducer;
