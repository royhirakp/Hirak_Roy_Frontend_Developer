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
  // const storeDta = useSelector((s) => s);
  const tempFUNCTION = useRef();
  const dispatch = useDispatch();
  async function TokenGenaration() {
    try {
      //api call for get the token
      let r1 = await axios.post(
        `https://company-ass1.onrender.com/v1/tokenGenarate`,
        {
          user: "hirak",
        }
      );
      dispatch(setToken(r1.data.token));
      //api for get the data
      const r2 = await axios.get(
        `https://company-ass1.onrender.com/v1/capsules`,
        {
          headers: {
            auth: r1.data.token,
          },
        }
      );
      dispatch(setAllCapsuleData(r2.data));
    } catch (error) {
      console.log(error);
    }
  }
  tempFUNCTION.current = TokenGenaration;
  useEffect(() => {
    //function for genarate the token and save to the store
    tempFUNCTION.current();
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
