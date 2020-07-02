import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import IntersectionObserver from "../../../components/IntersectionObserver";

export default function Cube() {
  return (
    <IntersectionObserver
      threshold={1}
      render={({ inView, ref }) => {
        return (
          <Box ref={ref}>
            {inView && (
              <div
                className="cubeContainer"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  height: "800px",
                }}
              ></div>
            )}
          </Box>
        );
      }}
    />
  );
}

/* <div
  style={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    height: "800px",
    backgroundColor: "#000647",
  }}
  ></div>; */
