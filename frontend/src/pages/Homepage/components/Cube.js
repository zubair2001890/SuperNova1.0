import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import IntersectionObserver from "../../../components/IntersectionObserver";

class Cube extends React.Component {
  render() {
    var cubeStyle = {
      width: this.props.size + "px",
      height: this.props.size + "px",
      transform: `rotateY(${this.props.rotation}deg)`,
    };

    return (
      <div className="cube" style={cubeStyle}>
        <div className="front square"></div>
        <div className="back square"></div>
        <div className="top square"></div>
        <div className="bottom square"></div>
        <div className="left square"></div>
        <div className="right square"></div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <IntersectionObserver
            threshold={1}
            render={({ inView, ref }) => {
              return (
                <Box ref={ref}>
                  {inView && (<Cube size={100} rotation={this.props.scrollY} />)}
                </Box>
              );
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
