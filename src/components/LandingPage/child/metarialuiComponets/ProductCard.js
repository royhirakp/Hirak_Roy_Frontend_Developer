import * as React from "react";

import Popup from "./Popup";
import DefultCard from "./DefultCard";
// import Loader from "./Loader";
const ProductCard = (props) => {
  const [popupStatus, setPopupStatus] = React.useState(false);
  return (
    <>
      {/* <Loader /> */}
      {popupStatus ? (
        <Popup setPopupStatus={setPopupStatus} data={props} />
      ) : (
        ""
      )}
      <DefultCard
        popupStatus={popupStatus}
        setPopupStatus={setPopupStatus}
        data={props}
      />
    </>
    // </div>
  );
};

export default ProductCard;
