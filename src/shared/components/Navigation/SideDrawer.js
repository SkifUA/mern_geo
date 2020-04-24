import  React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './SideDrawer.css'

class SideDrawer extends Component {
  render() {
    const props = this.props;

    const content = <aside className="side-drawer">
      {props.children}
    </aside>

    return ReactDOM.createPortal(content, document.getElementById('drawer-hook'))
  }
}

export default SideDrawer