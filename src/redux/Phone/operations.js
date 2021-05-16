import axios from 'axios';
import actions from './actions';

// axios.defaults.baseURL = `https://connections-api.herokuapp.com`;

const fetchContacts = () => dispatch => {
  dispatch(actions.fetchContactsRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(actions.fetchContactsSuccess(data)))
    .catch(error => dispatch(actions.fetchContactsError(error.message)));
};

const addNewContact = ({ name, number }) => dispatch => {
  const contact = {
    name,
    number,
  };
  dispatch(actions.addContactRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(actions.addContactError(error.message)));
};

const deleteContact = contactId => dispatch => {
  dispatch(actions.deleteContactRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(actions.deleteContactSuccess(contactId)))
    .catch(error => dispatch(actions.deleteContactError(error.message)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchContacts, addNewContact, deleteContact };
