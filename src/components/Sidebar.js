import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, Category, Person, ShoppingCart, Store } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ width: 250 }}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/users">
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button component={Link} to="/categories">
          <ListItemIcon>
            <Category />
          </ListItemIcon>
          <ListItemText primary="Categories" />
        </ListItem>
        <ListItem button component={Link} to="/products">
          <ListItemIcon>
            <Store />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem button component={Link} to="/orders">
          <ListItemIcon>
            <ShoppingCart />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
