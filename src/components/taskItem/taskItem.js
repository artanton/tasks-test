import { useDispatch } from 'react-redux';
import { DeleteButton, PhoneNoItem } from './taskItemStyled';
import { deleteTask } from '../../redux/operators';
import { VscTrash } from "react-icons/vsc";
import { formatToString } from 'components/helper';

export const TaskItem = ({ task }) => {
  const {id, text, date } = task;

  const dispatch = useDispatch();
const formattedDate=formatToString(date);
  return (
    <PhoneNoItem>
      <div>
       {id}
      </div>
      <div>{text}</div>
      <div>{formattedDate}</div>
      <DeleteButton onClick={() => dispatch(deleteTask(task.id))}>
      <VscTrash />
      </DeleteButton>
    </PhoneNoItem>
  );
};
