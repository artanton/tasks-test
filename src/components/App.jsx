import { ContactForm } from './ContactForm/ContactForm';
import { GlobalStyle } from './GlobalStyle';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectContact,
  selectError,
  selectIsLoading,
  selectSearchedContacts,
} from './../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from './../redux/operators';

export const App = () => {
  const actualContacts = useSelector(selectSearchedContacts);
  const allContacts = useSelector(selectContact);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <div>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        {isLoading && !error && <b>Request in progress...</b>}

        {allContacts.length > 0 && (
          <div>
            <p>Find contacts by name</p>
            <Filter />
          </div>
        )}

        {actualContacts.length > 0 && (
          <div>
            <ContactList />
          </div>
        )}
      </div>
      <GlobalStyle />
    </div>
  );
};
