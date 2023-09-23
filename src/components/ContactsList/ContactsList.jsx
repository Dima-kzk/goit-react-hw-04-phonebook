import { Contact } from 'components/Contact/Contact';

export function ContactsList({ contacts, onClick }) {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onClick={onClick}
        />
      ))}
    </ul>
  );
}
