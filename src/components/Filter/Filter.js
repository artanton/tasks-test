import { useDispatch, useSelector } from 'react-redux';
import { FilterStyled } from './FilterStyled';
import { filtering } from '../../redux/FilterSlice';
import { selectFilter } from '../../redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <FilterStyled
      type="text"
      value={filter}
      onChange={evt => dispatch(filtering(evt.target.value))}
    />
  );
};