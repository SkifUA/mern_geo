import React, { Component } from 'react'

import UserItem from './UserItem'
import Card from "../../shared/components/UIElements/Card";

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
          <Card >
            <h2>No users found.</h2>
          </Card>
        </div>
      )
    }

    return (
      <ul className="users-list">
        {items.map(user => (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            plaseCount={user.places}
          />
        ))}
      </ul>
    )
  }
}

export default UsersList