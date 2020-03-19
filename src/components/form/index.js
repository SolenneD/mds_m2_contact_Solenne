import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContact } from './actions';

class Form extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    const form = e.target.querySelectorAll('input');
    const contact = {
      id: Date.now()
    };
    form.forEach((input) => {
      contact[input.id] = input.value;
    });
    dispatch(addContact(contact));
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="firstName">
            <input placeholder="Prénom" type="text" id="firstName" name="firstName" />
          </label>
          <label htmlFor="lastName">
            <input placeholder="Nom" type="text" id="lastName" name="lastName" />
          </label>
          <label htmlFor="phone">
            <input placeholder="Téléphone" type="tel" id="phone" name="phone" minLength={10} maxLength={10} />
          </label>
          <label htmlFor="city">
            <input placeholder="Ville" type="text" id="city" name="city" />
          </label>
          <button type="submit">Ajouter un contact</button>
        </form>
      </div>
    );
  }
}

const mapToProps = (state) => {
  const { items } = state.contacts;

  return ({ items });
};

export default connect(mapToProps)(Form);
