import  React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from "react-transition-group";

import './SideDrawer.css'

class SideDrawer extends Component {
  render() {
    const props = this.props;

    const content = (
      <CSSTransition
        in={props.show}
        timeout={200}
        classNames="slide-in-left"
        mountOnEnter
        unmountOnExit
      >
        <aside className="side-drawer">{props.children}</aside>
      </CSSTransition>
    )

    return ReactDOM.createPortal(content, document.getElementById('drawer-hook'))
  }
}

export default SideDrawer