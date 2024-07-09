import React, { useState } from 'react';


import { VscTrash } from 'react-icons/vsc';
import { formatToString } from 'components/helper';


import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { DeleteConfirmationModal } from 'components/modal/modalWindow';
import { DeleteButton } from './taskItemStyled';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const TaskRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '80vw',
  gap: theme.spacing(2),
  '& > div': {
    flex: 1,
    padding: theme.spacing(1),
  },
  '& > div:first-of-type': {
    width: '30px',
    flexShrink: 0,
  },
  '& > div:last-of-type': {
    flexShrink: 0,
    width: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '& > div:nth-of-type(2)': {
    wordWrap: 'break-word',
  },
  '& > div:nth-of-type(3)': {
    wordWrap: 'break-word',
  },
}));



export const TaskItem = ({ task }) => {
  const { id, text, date } = task;
  const [showModal, setShowModal] = useState(false);

  const formattedDate = formatToString(date);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <TaskRow>
      <Item>{id}</Item>
      <Item>{text}</Item>
      <Item>{formattedDate}</Item>
      <Item>
        <DeleteButton onClick={toggleModal}>
          <VscTrash />
        </DeleteButton>
        {showModal && <DeleteConfirmationModal taskId={id} onClose={toggleModal} />}
      </Item>
    </TaskRow>
  );
};
