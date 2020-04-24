import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";

import './MainNavigation.css'

class MainNavigation extends Component {
  constructor() {
    super();

    this.state = {
      drawerIsOpen: false
    }
  }

  openDrawer = () => {
    this.setState({drawerIsOpen: true})
  }

  closeDrawer = () => {
    this.setState({drawerIsOpen: false})
  }

  render() {

    return <React.Fragment>
      {this.state.drawerIsOpen && <Backdrop onClick={this.closeDrawer}/>}
      {this.state.drawerIsOpen && (
        <SideDrawer>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      )}
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={this.openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  }
}

export default MainNavigation