import React, { Suspense, lazy, useEffect } from 'react';
import './App.css';
import { Switch } from 'react-router-dom';
import Container from './components/Container';
import { authOperations } from './redux/Auth';
import AppBar from './components/AppBar/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const HomePage = lazy(() =>
  import('./Views/HomePage' /* webpackChunkName: "home-page" */),
);

const PhoneBookPage = lazy(() =>
  import('./Views/PhoneBook' /* webpackChunkName: "phonebook-page" */),
);

const RegisterPage = lazy(() =>
  import('./Views/RegisterPage' /* webpackChunkName: "register-page" */),
);

const LoginPage = lazy(() =>
  import('./Views/LoginPage' /* webpackChunkName: "login-page" */),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Spinner animation="border" size="sl" />}>
        <Switch>
          <PublicRoute exact path="/" component={HomePage} />
          <PrivateRoute
            path="/contacts"
            redirectTo="/login"
            component={PhoneBookPage}
          />
          <PublicRoute
            path="/register"
            restricted
            redirectTo="/contacts"
            component={RegisterPage}
          />
          <PublicRoute
            path="/login"
            restricted
            redirectTo="/contacts"
            component={LoginPage}
          />
        </Switch>
      </Suspense>
    </Container>
  );
}
