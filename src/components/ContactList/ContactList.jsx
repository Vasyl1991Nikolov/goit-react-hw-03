// ContactList.js
import React from 'react';
import Contact from '../Contact/Contact';


const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(contact => (
      <Contact
        key={contact.id}
        contact={contact}
        onDelete={onDeleteContact}
      />
    ))}
  </ul>
);

export default ContactList;