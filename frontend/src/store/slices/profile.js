import { createSlice } from "@reduxjs/toolkit";
import projectsMockData from "../../mockData/projects.json";
import sleep from "../../helpers/sleep";
import { sendUpdateAccount, fetchProfile } from './middlewareAPI/middlewareAPI';

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: {}
  },
  extraReducers: {
    [sendUpdateAccount.fulfilled]: (state, action) => {
      state.profile = action.payload;
    },
    [fetchProfile.fulfilled]: (state, action) => {
      state.profile = action.payload;
    }
  }
});

export default profileSlice.reducer;