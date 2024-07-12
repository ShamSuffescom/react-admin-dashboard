import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import UsersList from './components/users/UsersList';
import UserForm from './components/users/UserForm';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Navbar />
          <div style={{ padding: 20 }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<UsersList />} />
              <Route path="/users/add" element={<UserForm />} />
              <Route path="/users/edit/:id" element={<UserForm />} />
              {/* Add routes for categories, products, and orders here */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
