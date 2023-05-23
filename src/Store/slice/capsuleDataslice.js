import { createSlice } from "@reduxjs/toolkit";

const capsuleSlice = createSlice({
  name: "allCapsules",
  initialState: {
    data: [],
    noOfPage: 0,
  },
  reducers: {
    setAllCapsuleData(state, action) {
      //   console.log(action);
      console.log(typeof action.payload);
      state.data = action.payload;
    },
  },
});

export default capsuleSlice.reducer;
export const { setAllCapsuleData } = capsuleSlice.actions;
