import UserCard from "./components/card";
import React from "react";
import { useState, useEffect} from "react";
import './App.css'

export default function App() {
  const [users, setUsers] = useState([]);

  const handleUsers = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users/');
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div>
      <button className='bttn' onClick={handleUsers}>Get Users</button>
      <div className="user-card-container">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

