import ACTION_TYPES from './actionTypes';
import { createNewContact } from '../../model/initialState';


export const updateContacts = contacts => ({
  type: ACTION_TYPES.UPDATE_CONTACTS,
  payload: contacts,
});

export const addContact = contact => ({
  type: ACTION_TYPES.ADD_CONTACT,
  payload: contact,
});

export const updateContact = contact => ({
  type: ACTION_TYPES.UPDATE_CONTACT,
  payload: contact,
});
export const deleteContact = id => {
  return {
    type: ACTION_TYPES.DELETE_CONTACT,
    payload: id,
  };
};
export const selectContact = contact => {
  return {
    type: ACTION_TYPES.SELECT_CONTACT,
    payload: contact,
  };
};

export const addNewContact = () => {
  return {
    type: ACTION_TYPES.ADD_NEW_CONTACT,
    payload: createNewContact(),
  };
};

// 
