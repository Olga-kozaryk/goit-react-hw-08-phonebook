import { useDispatch, useSelector } from 'react-redux';
import { OrderedList} from '@chakra-ui/react';

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

    const handleDeleteItem = (id) => {
    dispatch(deleteContact(id));
    };

    return (
        <OrderedList>
            {visibleContacts.map((item) => 
                <ContactListItem key={item.id} item={item} onDelete={handleDeleteItem} />
           )}
        </OrderedList>
    );
}

export default ContactList;

//Ok