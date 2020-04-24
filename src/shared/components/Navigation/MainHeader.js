import React, { Component } from 'react'

import './MainHeader.css'

class MainHeader extends Component {
  render() {
    const props = this.props;

    return (
      <header className="main-header">
        {props.children}
      </header>
    )
  }
}

export default MainHeader