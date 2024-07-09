import { useSelector } from 'react-redux';
import { TaskItem } from '../taskItem/taskItem';
import { PhoneNoList } from './taskListStyled';

import {selectTask} from '../../redux/selectors';

export const TaskList = () => {
  const Tasks = useSelector(selectTask);

  return (
    <PhoneNoList>
      {Tasks.map(task => {
        return (
          <li key={task.id}>
            <TaskItem task={task} />
          </li>
        );
      })}
    </PhoneNoList>
  );
};
