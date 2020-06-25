import { createSlice } from '@reduxjs/toolkit';

export const headerSlice = createSlice({
  name: 'header',
  initialState: {
    darkTheme: true,
  },
  reducers: {
    setDarkTheme: (state, action) => {
      state.darkTheme = action.payload;
    },
  },
});

export const { setDarkTheme } = headerSlice.actions;

export const selectDarkTheme = state => state.header.darkTheme;

export default headerSlice.reducer;
