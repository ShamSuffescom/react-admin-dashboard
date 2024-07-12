import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const deleteUser = (id) => {
    axios.delete(`/api/users/${id}`)
      .then(() => setUsers(users.filter(user => user.id !== id)))
      .catch(error => console.error('Error deleting user:', error));
  };

  return (
    <div>
      <h1>Users</h1>
      <Link to="/users/add">Add User</Link>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => deleteUser(user.id)}>Delete</button>
            <Link to={`/users/edit/${user.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
