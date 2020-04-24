import React from 'react'

import UsersList from "../components/UsersList";

const User = () => {
  const USERS = [{
    id: 'u1', name: 'Valerii', image: 'https://my-develop-portfolio.s3.amazonaws.com/uploads/portfolio/main_image/7/insurance_600400.jpg', places: 3
  }]
  return <UsersList items={USERS}/>
}

export default User