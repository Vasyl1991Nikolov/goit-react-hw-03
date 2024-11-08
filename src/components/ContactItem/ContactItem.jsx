// ContactItem.js
import React from 'react';

const ContactItem = ({ name, phone }) => (
  <li>
    <p>{name}: {phone}</p>
  </li>
);

export default ContactItem;
