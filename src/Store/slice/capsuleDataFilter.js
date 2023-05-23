import { createSlice } from "@reduxjs/toolkit";

const filterCapsule = createSlice({
  name: "filterCapsules",
  initialState: {
    filterStatus: false,
    filterdata: [],
  },
  reducers: {
    setFilterCapsuleData(state, action) {
      if (action.payload.length !== 0) state.filterStatus = true;
      state.filterdata = action.payload;
    },
    setFilterstatus(state, action) {
      state.filterStatus = false;
    },
  },
});

export default filterCapsule.reducer;
export const { setFilterCapsuleData, setFilterstatus } = filterCapsule.actions;
