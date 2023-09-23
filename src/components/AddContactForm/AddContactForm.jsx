import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Button, Form } from './AddContactForm.styled';

export const AddContactForm = props => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const InputChange = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'number':
        setNumber(event.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const SubmitHandle = event => {
    event.preventDefault();
    props.AddContact(name, number, nanoid());
    setName('');
    setNumber('');
  };

  return (
    <Form autoComplete="off" onSubmit={SubmitHandle}>
      <label>
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={name}
          onChange={InputChange}
        />
      </label>
      <label>
        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          value={number}
          onChange={InputChange}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
