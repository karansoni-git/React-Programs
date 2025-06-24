import { createSlice } from "@reduxjs/toolkit";

const privacySlice = createSlice({
  name: "privacy",
  initialState: { privacyVal: false },
  reducers: {
    toggle: (state) => {
      state.privacyVal = !state.privacyVal;
    },
  },
});

export const privacyAction = privacySlice.actions;
export default privacySlice;
