import styled from 'styled-components';
export const TaskRow = styled.div`
  display: flex;
  width: '80 wv';
  

  gap: ${p => p.theme.gap.big};
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
 
  cursor: pointer;
  display: flex;
  align-items: center;
`;
