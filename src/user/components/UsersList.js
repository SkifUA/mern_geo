import React, { Component } from 'react'
import UserItem from './UserItem'

import './UsersList.css'

class UsersList extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    const { items } = this.props;

    if (items.length === 0) {
      return (
        <div className="center">
          <h2>No users found.</h2>
        </div>
      )
    }

    return (
      <ul className="users-list">
        {items.map( user => {
          return(
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            plaseCount={user.places}
          />)
          })}
      </ul>
    )
  }
}

export default UsersList