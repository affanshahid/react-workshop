import React, { useState } from 'react';

class ShowWindowWidth extends React.Component {
  state = {
    currentWidth: null
  };

  windowHandler = () => {
    this.setState({
      currentWidth: window.innerWidth
    });
  };

  // this is called when the current component instance is available in the DOM
  componentDidMount() {
    this.setState({
      currentWidth: window.innerWidth
    });

    window.addEventListener('resize', this.windowHandler);
  }

  // this called when the current component instance will imminently leave the DOM
  componentWillUnmount() {
    window.removeEventListener('resize', this.windowHandler);
  }

  render() {
    return (
      <div>
        {this.props.children(this.state.currentWidth)}
      </div>
    );
  }
}

export default ShowWindowWidth;