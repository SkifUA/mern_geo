import  React, { Component } from 'react'

import './SideDrawer.css'

class SideDrawer extends Component {
  render() {
    const props = this.props;

    return <aside className="side-drawer">
      {props.children}
    </aside>
  }
}

export default SideDrawer