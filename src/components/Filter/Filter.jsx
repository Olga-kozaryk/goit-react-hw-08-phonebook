import { useDispatch } from 'react-redux';

import { Label } from './FilterLabel.styled';
import { filter } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const search = (e) => {
    dispatch(filter(e.target.value));
  };

  return (
    <Label>
      <input name="filter"
       onChange={search}
       placeholder='Find contact'
       />
    </Label>
  );
};

export default Filter;