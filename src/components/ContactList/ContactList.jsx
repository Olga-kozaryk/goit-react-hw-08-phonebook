import { useDispatch, useSelector } from 'react-redux';
import { OrderedList} from '@chakra-ui/react';

import { deleteContact} from '../../redux/thunk';
import {getVisibleContacts } from '../../redux/selector';
import ContactListItem from './ContactListItem';

const ContactList = () => {
    const dispatch = useDispatch();
    const visibleContacts = useSelector(getVisibleContacts);

    const handleDeleteItem = async (id) => {
        await dispatch(deleteContact(id)).unwrap();
    };

    return (
        <OrderedList>
            {visibleContacts.map((item) => (
                <ContactListItem key={item.id} item={item} onDelete={handleDeleteItem} />
            ))}
        </OrderedList>
    );
}

export default ContactList;

//Ok