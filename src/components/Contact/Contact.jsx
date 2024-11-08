import React from 'react';

const Contact = ({ contact, onDelete }) => (
  <li>
    <p>{contact.name}: {contact.number}</p>
    <button onClick={() => onDelete(contact.id)}>Delete</button>
  </li>
);

export default Contact;