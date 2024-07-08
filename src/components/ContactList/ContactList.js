import { useSelector } from 'react-redux';
import { ContactItem } from '../contactItem/ContactItem';
import { PhoneNoList } from './ContactListStyled';
import { selectSearchedContacts } from '../../redux/selectors';

export const ContactList = () => {
  const actualContacts = useSelector(selectSearchedContacts);

  return (
    <PhoneNoList>
      {actualContacts.map(contact => {
        return (
          <li key={contact.id}>
            <ContactItem contact={contact} />
          </li>
        );
      })}
    </PhoneNoList>
  );
};
