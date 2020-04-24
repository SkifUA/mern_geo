import React, { Component } from 'react'

import './UserItem.css'

class UserItem extends Component {
  render() {
    const props = this.props;

    return(
      <li className="user-item">
        <div className="user-item__content">
          <div className="user-item__image">
            <img src={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>{props.plaseCount} {props.plaseCount === 1 ? 'Place' : 'Places'}</h3>
          </div>
        </div>
      </li>
    )
  }
}

export default UserItem