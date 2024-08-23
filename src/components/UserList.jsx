// src/components/UserList.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useFetchData from '../hooks/useFetchData';

const UserList = () => {
  const usersList = useSelector((state) => state.user.usersList);
  const { fetchedData, loading } = useFetchData(usersList);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h1>Users</h1>
      <ul>
        {fetchedData.map((user) => (
          <li key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <Link to={`/users/${user.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
