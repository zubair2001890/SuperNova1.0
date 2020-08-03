import React, { Component, createContext } from "react";

const { Provider, Consumer } = createContext();

class StarProvider extends Component {
  state = {
    stars: [1, 0, 0, 0, 0, 0, 0],
    currentSlide: 0,
    updateCarousel: (newSlide) => {
      this.setState({ currentSlide: newSlide})
    },
    updateConstellation: (index) => {
      let stars = [...this.state.stars];
      let star = { ...stars[index] };
      stars = [0, 0, 0, 0, 0, 0, 0];
      star = 1;
      stars[index] = star;
      this.setState({ stars });

      if (this.state.currentSlide !== index) {
        this.setState({
          currentSlide: index,
        });
      }
    },
  };

  render() {
    return (
      <Provider
        value={{
          stars: this.state.stars,
          currentSlide: this.state.currentSlide,
          updateConstellation: this.state.updateConstellation,
          updateCarousel: this.state.updateCarousel,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { StarProvider };

export default Consumer;
