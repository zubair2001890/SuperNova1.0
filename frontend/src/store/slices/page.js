import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    darkTheme: 0,
    initialHeaderTheme: "black",
    scrollHeaderTheme: "black",
    particles: false,
  },
  reducers: {
    setDarkTheme: (state, action) => {
      state.darkTheme = action.payload;
    },
    setInitialHeaderTheme: (state, action) => {
      state.initialHeaderTheme = action.payload;
    },
    setScrollHeaderTheme: (state, action) => {
      state.scrollHeaderTheme = action.payload;
    },
    setParticles: (state, action) => {
      state.particles = action.payload;
    },
  },
});

export const {
  setDarkTheme,
  setInitialHeaderTheme,
  setScrollHeaderTheme,
  setParticles,
} = pageSlice.actions;

export const selectDarkTheme = (state) => state.page.darkTheme;
export const selectInitialHeaderTheme = (state) =>
  state.page.initialHeaderTheme;
export const selectScrollHeaderTheme = (state) => state.page.scrollHeaderTheme;
export const selectParticles = (state) => state.page.particles;

export default pageSlice.reducer;
