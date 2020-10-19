import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    initialHeaderTheme: "black",
    scrollHeaderTheme: "black",
    particles: false,
  },
  reducers: {
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
  setInitialHeaderTheme,
  setScrollHeaderTheme,
  setParticles,
} = pageSlice.actions;

export const selectInitialHeaderTheme = (state) =>
  state.page.initialHeaderTheme;
export const selectScrollHeaderTheme = (state) => state.page.scrollHeaderTheme;
export const selectParticles = (state) => state.page.particles;

export default pageSlice.reducer;
