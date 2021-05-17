import React, { useState, useCallback } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { operations, selectors } from '../../redux/Phone';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectors.getAllContacts);

  const dispatch = useDispatch();

  const handleChange = useCallback(e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`Тип поля name - ${name} не обрабатывается`);
    }
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      if (contacts.some(elm => elm.name.toLowerCase() === name.toLowerCase())) {
        return alert(`${name} is already in contacts`);
      }
      if (
        contacts.some(elm => elm.number.toLowerCase() === number.toLowerCase())
      ) {
        return alert(`${number} is already in contacts`);
      }

      dispatch(operations.addContact({ name, number }));

      setName('');
      setNumber('');
    },
    [dispatch, contacts, name, number],
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formGroupName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов."
          required
          value={name}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formGroupPhone">
        <Form.Label>Phone number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Phone"
          name="number"
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и также содержать пробелы, тире и начинаться с +"
          required
          value={number}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="success" type="submit">
        Add contact
      </Button>
    </Form>
  );
}

