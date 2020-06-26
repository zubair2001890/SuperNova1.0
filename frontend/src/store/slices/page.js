import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    darkTheme: true,
  },
  reducers: {
    setDarkTheme: (state, action) => {
      state.darkTheme = action.payload;
    },
  },
});

export const { setDarkTheme } = pageSlice.actions;

export const selectDarkTheme = (state) => state.page.darkTheme;

export default pageSlice.reducer;
