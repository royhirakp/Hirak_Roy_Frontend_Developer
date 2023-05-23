import { createSlice } from "@reduxjs/toolkit";

const TokenSlice = createSlice({
  name: "authToken",
  initialState: {
    token: "",
  },
  reducers: {
    setToken(state, action) {
      //   console.log(action);
      state.token = action.payload;
    },
  },
});

export default TokenSlice.reducer;
export const { setToken } = TokenSlice.actions;
