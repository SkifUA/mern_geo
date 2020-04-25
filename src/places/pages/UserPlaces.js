import React, { Component } from 'react';

import PlaceList from "../components/PlaceList";

class UserPlaces extends Component {
  constructor() {
    super();

    this.DUMMY_PLACES = [
      {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers of the world',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
        address: '20 W 34th St, New York, NY',
        location: {
          lan: 40.7484405,
          lng: -73.9878584
        },
        creator: 'u1'
      },
      {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers of the world',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
        address: '20 W 34th St, New York, NY',
        location: {
          lan: 40.7484405,
          lng: -73.9878584
        },
        creator: 'u2'
      }
    ]
  }

  render() {
    return <PlaceList items={this.DUMMY_PLACES} />
  }
}

export default UserPlaces