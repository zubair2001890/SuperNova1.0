import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    darkTheme: false,
    particles: false,
  },
  reducers: {
    setDarkTheme: (state, action) => {
      state.darkTheme = action.payload;
    },
    setParticles: (state, action) => {
      state.particles = action.payload;
    },
  },
});

export const { setDarkTheme, setParticles } = pageSlice.actions;

export const selectDarkTheme = (state) => state.page.darkTheme;
export const selectParticles = (state) => state.page.particles;

export default pageSlice.reducer;
