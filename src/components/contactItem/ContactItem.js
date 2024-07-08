import { useDispatch } from 'react-redux';
import { DeleteButton, PhoneNoItem } from './ContactItemStyled';
import { deleteContact } from '../../redux/operators';

export const ContactItem = ({ contact }) => {
  const { name, phone } = contact;

  const dispatch = useDispatch();

  return (
    <PhoneNoItem>
      <p>
        {name}: {phone}
      </p>
      <DeleteButton onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </DeleteButton>
    </PhoneNoItem>
  );
};
