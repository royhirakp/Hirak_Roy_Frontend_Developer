import * as React from "react";
// import Input from "@mui/material/Input";
// import InputLabel from "@mui/material/InputLabel";
// import FormControl from "@mui/material/FormControl";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { setFormData } from "../../../Store/slice/FormSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterCapsuleData,
  setFilterstatus,
} from "../../../Store/slice/capsuleDataFilter";

const FormSub = () => {
  // const
  const Storedata = useSelector((s) => s);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Search Form</h1>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("submit");
            console.log(Storedata);
            // console.log(Storedata.capsuleSlice.data);
            let filterData = Storedata.capsuleSlice.data?.filter((obj) => {
              let test1 = obj.type.includes(Storedata.fromData.data1);
              let test2 = obj.capsule_serial.includes(Storedata.fromData.data2);
              let test3 = obj.capsule_id.includes(Storedata.fromData.data3);
              return test1 && test2 && test3;
            });
            console.log(filterData);

            dispatch(setFilterCapsuleData(filterData));
          }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            // border: "1px solid black",
            width: "500px",
            // paddingLeft: "25%",
            // padding-left: '25%'
          }}
        >
          <Box sx={{ display: "flex", alignItems: "flex-end", padding: "5px" }}>
            <TextField
              onChange={(e) => {
                dispatch(setFormData({ key: "data1", data: e.target.value }));
              }}
              id="input-with-sx"
              label="Capsule type"
              variant="standard"
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end", padding: "5px" }}>
            <TextField
              onChange={(e) => {
                // console.log(e.target.value);
                dispatch(setFormData({ key: "data2", data: e.target.value }));
              }}
              id="input-with-sx"
              label="capsule_serial"
              variant="standard"
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end", padding: "5px" }}>
            <TextField
              onChange={(e) => {
                dispatch(setFormData({ key: "data3", data: e.target.value }));
              }}
              id="input-with-sx"
              label="capsule_id"
              variant="standard"
            />
          </Box>
          <button>submit</button>
        </form>
        <button
          onClick={() => {
            dispatch(setFilterstatus());
          }}
        >
          Cancel Search filter
        </button>
      </Box>
    </div>
  );
};

export default FormSub;

// capsule_id, capsule_serial, type
