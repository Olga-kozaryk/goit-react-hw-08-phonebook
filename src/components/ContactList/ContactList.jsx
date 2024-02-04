import { useDispatch, useSelector } from 'react-redux';
import { OrderedList, Text} from '@chakra-ui/react';

import { deleteContact} from '../../redux/thunk';
import {getContacts, getFilter} from '../../redux/selector';
import ContactListItem from './ContactListItem';

const ContactList = () => {
    const dispatch = useDispatch();
    const items= useSelector(getContacts);
    const filterValue = useSelector(getFilter);


    const visibleContacts = items?.filter(item =>
    item.name.toLowerCase().includes(filterValue.toLowerCase())
  );

    const handleDeleteItem = async (id) => {
        await dispatch(deleteContact(id)).unwrap();
    };

    return (
        <OrderedList>
           {visibleContacts.length > 0 ? (
            visibleContacts.map((item) => 
                <ContactListItem key={item.id} item={item} onDelete={handleDeleteItem} />
           )) : (<Text>No contacts found.</Text>)}
        </OrderedList>
    );
}

export default ContactList;

//Ok