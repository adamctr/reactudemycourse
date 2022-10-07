import React, { Component } from "react";

const CountHits = (WrappedComponent) => {
  class CountHits extends Component {
    state = {
      hits: 0,
    };

    addOneHit = () => {
      this.setState((prevState) => {
        return {
          hits: prevState.hits + 1,
        };
      });
    };

    componentDidUpdate(prevProps, prevState) {
      if (this.state !== prevState) {
        const Compname = WrappedComponent.name;
        this.props.reduceHandler(Compname);
      }
    }
    render() {
      return (
        <WrappedComponent
          addOneHit={this.addOneHit}
          hocState={this.state}
          {...this.props}
        />
      );
    }
  }
  return CountHits;
};

export default CountHits;
