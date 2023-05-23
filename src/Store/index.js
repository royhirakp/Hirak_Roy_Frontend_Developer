import { configureStore } from "@reduxjs/toolkit";
import FormSlice from "./slice/FormSlice";
import capsuleSlice from "./slice/capsuleDataslice";
import capsuleDataFilter from "./slice/capsuleDataFilter";
import TokenSlice from "./slice/TokenSlice";
const store = configureStore({
  reducer: {
    fromData: FormSlice,
    capsuleDataFilter: capsuleDataFilter,
    TokenSlice: TokenSlice,
    capsuleSlice: capsuleSlice,
    // reducer2:reducrer
  },
});

export default store;
