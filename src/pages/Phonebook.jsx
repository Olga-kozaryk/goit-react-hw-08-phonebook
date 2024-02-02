import { Container } from 'components/App/App.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React from 'react'

export const Phonebook = () => {
  return ( 
    <Container>
    <h1>Phonebook</h1>
    <ContactForm />
    <h2>Contacts</h2>
    
      <Filter/>
      <ContactList/>
    </Container>
          );
        };
    
