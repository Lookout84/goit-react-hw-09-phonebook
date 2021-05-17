import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { operations, selectors } from '../../redux/Phone';

export default function ContactList() {
  const contacts = useSelector(selectors.getVisibleContacts);

  const dispatch = useDispatch();
  const onDeleteContact = id => {
    dispatch(operations.deleteContact(id));
  };

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone number</th>
          <th>Delete</th>
        </tr>
      </thead>
      {contacts.map(({ id, name, number }) => (
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{number}</td>
            <td>
              <Button
                variant="danger"
                type="button"
                onClick={() => {
                  onDeleteContact(id);
                }}
              >
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      ))}
    </Table>
  );
}

// const mapStateToProps = state => ({
//   contacts: selectors.getVisibleContacts(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(operations.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  onDeleteContact: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
