// src/components/UserDetail.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams();
  const usersList = useSelector((state) => state.user.usersList);
  const user = usersList.find((user) => user.id === parseInt(id));

  if (!user) return <p>User not found</p>;

  return (
    <div className="user-detail">
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <Link to="/" className="back-link">Back to User List</Link>
    </div>
  );
};

export default UserDetail;
