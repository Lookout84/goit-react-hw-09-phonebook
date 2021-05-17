import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../../redux/Phone';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(selectors.getFilter);

  const onChange = e => dispatch(actions.filterContact(e.target.value));

  return (
    <Form.Group controlId="formGroupName">
      <Form.Label>Find contacts by name</Form.Label>
      <Form.Control type="text" value={value} onChange={onChange} />
    </Form.Group>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
