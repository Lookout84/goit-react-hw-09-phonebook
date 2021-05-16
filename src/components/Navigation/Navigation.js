import React from 'react';
import { Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/Auth';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <Nav variant="pills" className="justify-content-start" activeKey="/home">
      <Nav.Item>
        <Nav.Link eventKey="1" as={NavLink} to="/" exact>
          Home Page
        </Nav.Link>
      </Nav.Item>

      {isLoggedIn && (
        <Nav.Item>
          <Nav.Link eventKey="2" as={NavLink} to="/contacts" exact>
            Contacts
          </Nav.Link>
        </Nav.Item>
      )}
    </Nav>
  );
}
