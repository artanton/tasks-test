import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  ErrorMessageStyled,
  FieldGroup,
  FieldStyled,
  FormStyled,
} from './taskFormStyled';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/operators';

const taskSchema = Yup.object().shape({
  text: Yup.string()
    .matches(/^[^!]*$/, 'The task cannot contain the "!" character.')
    .required('Required'),
});

export const ContactForm = () => {
  const dispatchTask = useDispatch();

  const onAdd = (newTask, actions) => {
    dispatchTask(addTask(newTask));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        text: '',
      }}
      validationSchema={taskSchema}
      onSubmit={onAdd}
    >
      <FormStyled>
        <FieldGroup>
          Task 
          <FieldStyled name="text" type="text" placeholder="Insert your task here" />
          <ErrorMessageStyled name="text" component="span" />
        </FieldGroup>

        <Button type="submit">Add Task</Button>
      </FormStyled>
    </Formik>
  );
};
