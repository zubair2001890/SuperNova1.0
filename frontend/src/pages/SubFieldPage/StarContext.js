import React, { Component, createContext } from "react";

const { Provider, Consumer } = createContext();

class StarProvider extends Component {
  state = {
    stars: [1, 0, 0, 0, 0, 0, 0],
    currentSlide: 0,
    updateConstellation: (currentSlide) => {
      for (var i = 0; i < this.state.stars.length; i++) {
        if (i === currentSlide) {
          let stars = [...this.state.stars];
          let star = { ...stars[i] };
          star = 1;
          stars[i] = star;
          this.setState({ stars });
        } else {
          let stars = [...this.state.stars];
          let star = { ...stars[i] };
          star = 0;
          stars[i] = star;
          this.setState({ stars });
        }
    }
    console.log(this.state.stars);
    },
    logStars: () => {
      console.log(this.state.stars);
    },
  };

  render() {
    return (
      <Provider
        value={{
          stars: this.state.stars,
          currentSlide: this.state.currentSlide,
          updateConstellation: this.state.updateConstellation,
          logStars: this.state.logStars,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { StarProvider };

export default Consumer;
