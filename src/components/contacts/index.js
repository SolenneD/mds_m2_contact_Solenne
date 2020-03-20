import React, { useState } from 'react';
import { connect } from 'react-redux';

import { deleteContact, editContact } from './actions';
import Form from '../form/index';

const Contact = ({ dispatch, user }) => {
  const {
    firstName,
    phone,
    lastName,
    city,
    id
  } = user;
  const [modify, setModify] = useState(false);
  const [userFirstName, setUserFirstName] = useState(firstName);
  const [userPhone, setUserPhone] = useState(phone);
  const [userLastName, setUserLastName] = useState(lastName);
  const [userCity, setUserCity] = useState(city);

  const handleClick = (contact) => {
    const updateContact = contact;
    updateContact.phone = userPhone;
    updateContact.firstName = userFirstName;
    updateContact.lastName = userLastName;
    updateContact.city = userCity;
    dispatch(editContact(updateContact));
    setModify(false);
  };

  return (
    <li>
      {
        modify
          ? (
            <div>
              <input type="text" value={userFirstName} name="firstName" onChange={(e) => setUserFirstName(e.target.value)} />
              <input type="text" value={userLastName} name="lastName" onChange={(e) => setUserLastName(e.target.value)} />
              <input type="text" value={userPhone} name="phone" onChange={(e) => setUserPhone(e.target.value)} />
              <input type="text" value={userCity} name="city" onChange={(e) => setUserCity(e.target.value)} />
            </div>
          )
          : (
            <div>
              <span>{`${firstName} ${lastName}`}</span>
              <p>{`Téléphone: ${phone}`}</p>
              <p>{`Ville: ${city}`}</p>
            </div>
          )
      }
      <button
        className="actions delete"
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        <i title="supprimer" className="far fa-trash-alt fa-lg" />
      </button>
      {
        modify
          ? (
            <button className="actions validate" type="button" onClick={() => handleClick(user)}>
              <i title="valider" className="far fa-check-square fa-lg" />
            </button>
          )
          : (
            <button className="actions edit" type="button" onClick={() => setModify(true)}>
              <i title="modifier" className="far fa-edit fa-lg" />
            </button>
          )
      }
    </li>
  );
};

const Contacts = ({ dispatch, items }) => {
  const [search, setSearch] = useState('');
  return (
    <div className="column">
      <ul>
        <input className="search" type="search" placeholder="Rechercher" onChange={(e) => setSearch(e.target.value)} />
        {
          items
            .filter((i) => i.firstName.toLowerCase().indexOf(search.toLowerCase()) !== -1
            || i.lastName.toLowerCase().indexOf(search.toLowerCase()) !== -1
            || i.phone.toLowerCase().indexOf(search.toLowerCase()) !== -1)
            .map((user) => (
              <Contact
                key={user.id}
                dispatch={dispatch}
                user={user}
              />
            ))
        }
      </ul>
      <Form />
    </div>
  );
};

const mapToProps = (state) => {
  const { items } = state.contacts;

  return ({ items });
};

export default connect(mapToProps)(Contacts);
