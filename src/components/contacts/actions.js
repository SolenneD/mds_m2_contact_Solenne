import actionsTypes from './actions-types';

/**
 * Add contact
 */
export const addContact = (contact) => ({
  type: actionsTypes.ADD_CONTACT,
  contact
});

/**
 * Delete contact
 */
export const deleteContact = (id) => ({
  type: actionsTypes.DELETE_CONTACT,
  id
});

/**
 * Edit contact
 */
export const editContact = (contact) => ({
  type: actionsTypes.EDIT_CONTACT,
  contact
});
