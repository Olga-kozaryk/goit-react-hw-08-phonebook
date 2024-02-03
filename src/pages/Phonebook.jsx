
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import React, { useEffect } from 'react'
import { Box, Spinner, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from '../redux/selector';
import { fetchContacts } from '../redux/thunk';

export const Phonebook = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
      dispatch(fetchContacts());
  }, [dispatch]);


  return (
      <Box width='100%'>
          <Text fontSize='4xl' fontWeight='bold'>Phonebook</Text>

          <ContactForm />

          <Text fontSize='4xl' marginTop={12} >Contacts</Text>

          <Filter />

          {isLoading ? <Spinner/> : <ContactList />}
      </Box>
  );
}
