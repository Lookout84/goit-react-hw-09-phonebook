import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import { operations, selectors } from '../redux/Phone';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

export default function PhoneBook() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(selectors.getLoading);

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
    <Container fluid="md">
      <Row className="mt-2">
        <Col>
          <ContactForm />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2>Contacts</h2>
          <Filter />
          {isLoadingContacts && <Spinner animation="border" size="sl" />}
          <ContactList />
        </Col>
      </Row>
    </Container>
  );
}
