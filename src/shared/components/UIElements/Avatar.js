import React, { Component } from 'react';

import './Avatar.css';

class Avatar extends Component {
  render() {
    const props = this.props;

    return (
      <div className={`avatar ${props.className}`} style={props.style}>
        <img
          src={props.image}
          alt={props.alt}
          style={{ width: props.width, height: props.width }}
        />
      </div>
    )
  };
}

export default Avatar;
