import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UserForm = () => {
  const [name, setName] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`/api/users/${id}`)
        .then(response => setName(response.data.name))
        .catch(error => console.error('Error fetching user:', error));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name };

    if (id) {
      axios.put(`/api/users/${id}`, user)
        .then(() => navigate('/users'))
        .catch(error => console.error('Error updating user:', error));
    } else {
      axios.post('/api/users', user)
        .then(() => navigate('/users'))
        .catch(error => console.error('Error adding user:', error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default UserForm;
