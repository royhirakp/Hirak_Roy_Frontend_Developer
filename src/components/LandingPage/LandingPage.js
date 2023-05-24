import React, { useEffect, useRef } from "react";
import Banner from "./child/Banner";
import DataGrid from "./child/DataGrid";
import FormSub from "./child/FormSub";

import {
  useDispatch,
  //  useSelector
} from "react-redux";
import { setToken } from "../../Store/slice/TokenSlice";
import { setAllCapsuleData } from "../../Store/slice/capsuleDataslice";
import axios from "axios";
// require("dotenv").config();

const LandingPage = () => {
  // console.log(process.env.hirak, "=============env");
  // const storeDta = useSelector((s) => s);
  const tempFUNCTION = useRef();
  const dispatch = useDispatch();
  async function TokenGenaration() {
    axios
      .post(`https://company-ass1.onrender.com/v1/tokenGenarate`, {
        user: "hirak",
      })
      .then((res) => {
        // console.log(res.data.token, "form tyen ");
        dispatch(setToken(res.data.token));

        //api call for 2nd data
        const config = {
          headers: {
            auth: res.data.token,
          },
        };
        axios
          .get(`https://company-ass1.onrender.com/v1/capsules`, config)
          .then((res2) => {
            dispatch(setAllCapsuleData(res2.data));
          })
          .catch((err) => console.log(err));
      })

      .catch((err) => console.log(err));
  }
  tempFUNCTION.current = TokenGenaration;
  useEffect(() => {
    //function for genarate the token and save to the store
    tempFUNCTION.current();
    // TokenGenaration();
  }, []);

  return (
    <div>
      <Banner />
      <FormSub />
      <DataGrid />
    </div>
  );
};

export default LandingPage;
