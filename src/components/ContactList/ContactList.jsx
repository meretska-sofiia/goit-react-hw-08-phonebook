import { useSelector } from 'react-redux';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { selectVisibleContacts } from 'redux/contacts/contactSelectors';
import { List } from './ContactList.styled';

const ContactList = () => {
  const contactsList = useSelector(selectVisibleContacts);

  return (
    <List>
      <ContactListItem contacts={contactsList} />
    </List>
  );
};

export default ContactList;
