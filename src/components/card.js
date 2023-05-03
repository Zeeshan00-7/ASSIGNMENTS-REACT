import React, { useState } from 'react';
import './card.css'

export default function UserCard({ user }) {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.first_name} />
      <h2>{`${user.first_name} ${user.last_name}`}</h2>
  
      <p>{user.email}</p>
    </div>
  );}
  
