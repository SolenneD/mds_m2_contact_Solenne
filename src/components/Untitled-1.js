import actionsTypes from './actions-types';
import MyImmutable from '../immutable';

console.log(fromJS);

const initialState = {
  items: [{
    id: '1',
    firstName: 'Cyril',
    lastName: 'Vimard',
    phone: '0603938765',
    city: 'Paris'
  }, {
    id: '2',
    firstName: 'Elies',
    lastName: 'Amarelo',
    phone: '0603931165',
    city: 'Paris'
  }]
};

const addContact = (state, action) => {
  return MyImmutable.fromJS(state).setIn(action.contact).toJS();
};

const deleteContact = (state, action) => ({
  items: state.items.filter((contact) => contact.id !== action.id)
});

const editContact = (state, action) => ({
  items: state.items.map((contact) => {
    if (contact.id === action.contact.id) {
      return Object.assign(contact, action.contact);
    }
    return contact;
  })
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.ADD_CONTACT:
      return addContact(state, action);
    case actionsTypes.DELETE_CONTACT:
      return deleteContact(state, action);
    case actionsTypes.EDIT_CONTACT:
      return editContact(state, action);
    default:
      return state;
  }
};
