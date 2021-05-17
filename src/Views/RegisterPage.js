import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/Auth';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = useCallback(e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.warn(`Тип поля name - ${name} не обрабатывается`);
    }
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      if (!name || !email || !password) {
        alert('No name or e-mail or password');
        return;
      }
      dispatch(authOperations.register({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');
    },
    [dispatch, name, email, password],
  );

  return (
    <div>
      <Container fluid="md">
        <Row>
          <Col></Col>
          <Col>
            <h1>Registration:</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Yuor name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
