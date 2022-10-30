import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/contactsThunk.js';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemText from '@mui/material/ListItemText';

const ContactListItem = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <>
      {contacts.length > 0 &&
        contacts.map(contact => (
          <ListItem
            key={contact.id}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDeleteContact(contact.id)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={contact.name} secondary={contact.number} />
          </ListItem>
        ))}
    </>
  );
};

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
};

export default ContactListItem;
