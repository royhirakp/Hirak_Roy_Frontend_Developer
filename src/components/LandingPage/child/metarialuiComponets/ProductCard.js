import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Popup from "./Popup";
const ProductCard = (props) => {
  const [popupStatus, setPopupStatus] = React.useState(false);
  const { capsule_id, capsule_serial, type } = props.data;
  return (
    <>
      {popupStatus ? (
        <Popup setPopupStatus={setPopupStatus} data={props} />
      ) : (
        <div
          onClick={() => {
            console.log(popupStatus);
            setPopupStatus(!popupStatus);
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
      )}
    </>
    // </div>
  );
};

export default ProductCard;
