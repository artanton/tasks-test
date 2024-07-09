import { ContactForm } from './taskForm/taskForm';
import { GlobalStyle } from './GlobalStyle';
import { ContactList } from './taskList/taskList';
// import { Filter } from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectTask,
  selectError,
  selectIsLoading,
 
} from './../redux/selectors';
import { useEffect } from 'react';
import { fetchTasks } from './../redux/operators';
import { MagnifyingGlass } from 'react-loader-spinner';

export const App = () => {
  // const actualContacts = useSelector(selectSearchedContacts);
  const allTasks = useSelector(selectTask);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
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
        <h1>Tasks</h1>
        <ContactForm />

        {isLoading && !error && (
          <div>
            <MagnifyingGlass
              visible={true}
              height="120"
              width="120"
              ariaLabel="magnifying-glass-loading"
              wrapperStyle={{}}
              wrapperClass="magnifying-glass-wrapper"
              glassColor="#3d9bba"
              color="#0f0d0d"
            />
          </div>
        )}

        {/* {allTasks.length > 0 && (
          <div>
            <p>Find contacts by name</p>
            <Filter />
          </div>
        )} */}

        {allTasks.length > 0 && (
          <div>
            <ContactList />
          </div>
        )}
      </div>
      <GlobalStyle />
    </div>
  );
};
