import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  ErrorMessageStyled,
  FieldGroup,
  FieldStyled,
  FormStyled,
} from './ContactFormStyled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/operators';
import Notiflix from 'notiflix';
import { selectContact } from '../../redux/selectors';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[A-Z][a-z]{1,} [A-Z][a-z]{1,}$/,
      'Insert Name and Surname please'
    )
    .required('Required'),
  phone: Yup.string()
    .matches(/^\d{12}$/, 'Please enter 12 digits')

    .required('Required'),
});

export const ContactForm = () => {
  const dispatchContact = useDispatch();
  const contacts = useSelector(selectContact);

  const onAdd = (newContact, actions) => {
    const contactExist = contacts.some(
      contact => contact.name === newContact.name
    );

    if (contactExist) {
      Notiflix.Notify.failure(
        ` ${newContact.name} is already in the phonebook`
      );
    } else {
      dispatchContact(addContact(newContact));
      actions.resetForm();
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      validationSchema={contactSchema}
      onSubmit={onAdd}
    >
      <FormStyled>
        <FieldGroup>
          Name
          <FieldStyled name="name" type="string" placeholder="John Smith" />
          <ErrorMessageStyled name="name" component="span" />
        </FieldGroup>

        <FieldGroup>
          Phone Number
          <FieldStyled name="phone" type="string" placeholder="130123456789" />
          <ErrorMessageStyled name="phone" component="span" />
        </FieldGroup>

        <Button type="submit">Add Contact</Button>
      </FormStyled>
    </Formik>
  );
};
