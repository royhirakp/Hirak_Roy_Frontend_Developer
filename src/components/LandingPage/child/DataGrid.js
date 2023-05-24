import * as React from "react";
import ProductCard from "./metarialuiComponets/ProductCard/ProductCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";

const FilterDataGrid = ({ Storedata }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          paddingLeft: "25%",
          width: "700px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {Storedata.capsuleDataFilter.filterdata?.map((item, indx) => {
          return (
            <div
              key={indx}
              style={{
                padding: "10px",
              }}
            >
              <ProductCard data={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

const DefoultDataGrid = ({ state }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        paddingLeft: "25%",
        width: "800px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {state?.map((item, indx) => {
        return (
          <div
            key={indx}
            style={{
              padding: "10px",
              // paddingLeft: "25%",
            }}
          >
            <ProductCard data={item} />
          </div>
        );
      })}
    </div>
  );
};

const DataGrid = () => {
  const [currPageNo, setPageNo] = React.useState(1);
  const [state, setState] = React.useState([]);
  const Storedata = useSelector((s) => s);
  const tempFunction = React.useRef();
  const [pageCount, setPageCount] = React.useState(0);

  function useEffectFunction() {
    let temp = Storedata.capsuleSlice.data.length / 10;
    let parseIntTemp = parseInt(temp);
    if (temp !== parseIntTemp) parseIntTemp = parseIntTemp + 1;
    setPageCount(parseIntTemp);
    console.log(pageCount);
    setState(() => {
      return Storedata.capsuleSlice.data.slice(
        (currPageNo - 1) * 10,
        (currPageNo - 1) * 10 + 10
      );
    });
  }

  tempFunction.current = useEffectFunction;
  React.useEffect(() => {
    tempFunction.current();
  }, [currPageNo, Storedata.capsuleSlice.data]);

  return (
    <>
      <h1>list of SpaceX Capsules</h1>
      {Storedata.capsuleDataFilter.filterdata.length !== 0 ? (
        <FilterDataGrid Storedata={Storedata} />
      ) : (
        <DefoultDataGrid state={state} />
      )}

      <Stack
        spacing={2}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 0 50px 0",
        }}
      >
        <Pagination
          count={pageCount}
          onChange={(e, v) => {
            setPageNo(v);
          }}
          color="secondary"
        />
      </Stack>
    </>
  );
};

export default DataGrid;
