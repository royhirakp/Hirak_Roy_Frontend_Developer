import { createSlice } from "@reduxjs/toolkit";
// import { clearAlluser } from "../actions/indexAC"
const fromSluce = createSlice({
  name: "formData",
  initialState: {
    data1: "",
    data2: "",
    data3: "",
  },
  reducers: {
    setFormData(state, action) {
      //   console.log("form from slice ", action.payload);
      const { key, data } = action.payload;
      switch (key) {
        case "data1":
          state.data1 = data;
          break;
        case "data2":
          state.data2 = data;
          break;
        case "data3":
          state.data3 = data;
          break;
        default:
          break;
      }
    },
  },
});

export default fromSluce.reducer;
export const { setFormData } = fromSluce.actions;
