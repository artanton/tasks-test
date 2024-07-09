import { Formik } from 'formik';

import {
  Button,
  ErrorMessageStyled,
  FieldGroup,
  FieldStyled,
  FormStyled,
} from './taskFormStyled';
import {  useDispatch } from 'react-redux';
import { addTask} from '../../redux/operators';





export const ContactForm = () => {
  const dispatchTask = useDispatch();


  const onAdd = (newTask, actions) => {
    
      dispatchTask(addTask(newTask));
      actions.resetForm();
    
  };

  return (
    <Formik
      initialValues={{
        text: ''
       
      }}
     
      onSubmit={onAdd}
    >
      <FormStyled>
        <FieldGroup>
          Task 
          <FieldStyled name="name" type="string" placeholder="Insert your task here" />
          <ErrorMessageStyled name="name" component="span" />
        </FieldGroup>

       

        <Button type="submit">Add Task</Button>
      </FormStyled>
    </Formik>
  );
};
