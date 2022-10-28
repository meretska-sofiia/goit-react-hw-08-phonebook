import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsThunk.js';
import { selectError, selectIsLoading } from 'redux/contacts/contactSelectors';
import { ContactForm } from 'components/AddContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import SearchContactFilter from 'components/Filter/Filter';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <>
        <h2>Contacts</h2>
        <SearchContactFilter />

        <ContactList />
      </>
    </div>
  );
};

export default ContactsPage;
