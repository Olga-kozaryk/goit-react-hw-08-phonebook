import { useDispatch, useSelector } from 'react-redux';


import { deleteContact} from '../../redux/thunk';
import { getFilter, getVisibleContacts } from '../../redux/selector';
import { useState } from 'react';
import { Box, Button, Flex, ListItem, OrderedList, Text } from '@chakra-ui/react';

const HighlightText = ({ highlightText, name }) => {
  const indexSubstr = name.toLowerCase().indexOf(highlightText);

  const highlightText1 = name.slice(0, indexSubstr)
  const highlightText2 = name.slice(indexSubstr, indexSubstr + highlightText.length)
  const highlightText3 = name.slice(indexSubstr + highlightText.length)

  return <Text as='span'>{highlightText1}<Text as='span' fontWeight='bold'>{highlightText2}</Text>{highlightText3}</Text>
}

const ContactList = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const filter = useSelector(getFilter)

  const visibleContacts = useSelector(getVisibleContacts)

  const contactDelete = async (id) => {
    await dispatch(deleteContact(id)).unwrap();
};


  return (
    <>
      
    <OrderedList>

      {visibleContacts.map(({ id, name, number }) => (
      <ListItem marginBlock={6}>
        <Flex width="100%"
          justifyContent='space-between'
          alignItems='center'>

          <Box>
            <Text>
              {!!filter ? 
              <HighlightText highlightText={filter} name={name} />
               : name}  {number}</Text>

            </Box>

          <Button 
          isLoading={isLoading} 
          colorScheme='red' 
          size="sm"
          onClick={() => {
          setIsLoading(true);
          contactDelete(id).finally(() => setIsLoading(false))
          }}>Delete</Button>

      </Flex>
    </ListItem>
      ))}
    </OrderedList>
    </>
  );
}
export default ContactList;

//Ok