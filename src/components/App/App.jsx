import { useEffect, useState, useRef } from 'react';
import { Сentralizer } from './App.styled';
import { Section } from 'components/Section/Section';
import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const isFirstRender = useRef(0);

  const AddContact = (name, number, id) => {
    if (
      contacts.some(e => {
        return e.name.toLowerCase() === name.toLowerCase();
      })
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    setContacts(prevState => [...prevState, { name, id, number }]);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const InputHandle = event => {
    if (event.currentTarget.name === 'filter') {
      setFilter(event.currentTarget.value);
    }
  };

  const filterByName = () => {
    return filter
      ? contacts.filter(({ name }) =>
          name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;
  };

  useEffect(() => {
    if (isFirstRender.current < 2) {
      isFirstRender.current += 1;
      return;
    }

    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    let cnt = JSON.parse(localStorage.getItem('contacts'));

    if (cnt === null) cnt = [];
    setContacts(cnt);
  }, []);

  return (
    <Сentralizer>
      <Section title="Phonebook">
        <AddContactForm AddContact={AddContact} />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 ? (
          <>
            <Filter filter={filter} InputChange={InputHandle} />
            <ContactsList contacts={filterByName()} onClick={deleteContact} />
          </>
        ) : (
          <>
            <p>No contacts.</p>
            <p>You can add contacts.</p>
          </>
        )}
      </Section>
    </Сentralizer>
  );
};
