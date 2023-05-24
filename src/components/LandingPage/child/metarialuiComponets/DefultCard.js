// import React from 'react'
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
const DefultCard = (props) => {
  const { capsule_id, capsule_serial, type } = props.data;
  return (
    <div>
      <div
        onClick={() => {
          // console.log(props.popupStatus);
          props.setPopupStatus(!props.popupStatus);
        }}
      >
        <Card sx={{ maxWidth: 200 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              <b>
                <u> type:</u>
              </b>
              {type}
            </Typography>

            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              <b>
                <u> capsule_id:</u>
              </b>
              {capsule_id}
            </Typography>

            <Typography variant="body2">
              <u>
                <b>capsule_serial:</b>
              </u>
              {capsule_serial}
              <br />
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DefultCard;
