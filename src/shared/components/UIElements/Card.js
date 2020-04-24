import React, { Component } from 'react';

import './Card.css';

class Card extends Component {

  render () {
    const props = this.props;

    return (
      <div className={`card ${props.className}`} style={props.style}>
        {props.children}
      </div>
    )
  }
}

export default Card;
