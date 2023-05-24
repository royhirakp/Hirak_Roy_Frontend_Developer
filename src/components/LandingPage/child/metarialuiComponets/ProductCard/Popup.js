import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Popup = (props) => {
  const { type, details, capsule_serial, capsule_id } = props.data.data;

  return (
    <div
      style={{
        border: "1px solid",
        // zIndex: "9999",
        position: "absolute",
        background: "black",
        backdropFilter: "blur(5px)",
        // filter: "blur(8px)",
      }}
    >
      <Card sx={{ maxWidth: 200 }}>
        <button
          onClick={() => {
            props.setPopupStatus(false);
          }}
        >
          Cancle
        </button>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            capsule Type:{type}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <i>
              <b> details: </b>
            </i>
            {details}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <i>
              <b> capsule_serial: </b>
            </i>
            {capsule_serial}
          </Typography>
          <Typography variant="body2">
            <i>
              <b> capsule_id: </b>
            </i>
            {capsule_id}
            <br />
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
    // </div>
  );
};

export default Popup;
