import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { authSelectors } from '../../redux/Auth';
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Navigation />
        </Nav>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Navbar>
    </header>
  );
}

AppBar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};
