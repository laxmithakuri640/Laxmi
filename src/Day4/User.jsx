import React from 'react';
import UserCard from './Component/UserCard';


export default function User() {
  const user = {
    name: 'Bibika Thapa',
    email: 'Bibika@example.com',
    photo:'https://images.unsplash.com/photo-1581888227599-779811dcd002?auto=compress&cs=tinysrgb&dpr=2&w=200' 

  };

  return (
    <div>
      <h2>User Profile</h2>
      <UserCard user={user} />
    </div>
  );
}