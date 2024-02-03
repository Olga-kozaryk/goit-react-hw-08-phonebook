import { useDispatch } from 'react-redux';
import { useMemo, useState } from 'react';
import { FormControl, FormLabel, Input, InputGroup } from '@chakra-ui/react';
import debounce from 'lodash.debounce';

import { setFilter } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handlerChangeFilter = e => {
      setValue(e.target.value);
      debouncedFilterChange(e.target.value)
  };

  const debouncedFilterChange = useMemo(() => debounce((value) => {
      dispatch(setFilter(value.toLowerCase().trim()));
  }, 300), [dispatch])


  return (
    <FormControl>
        <FormLabel htmlFor='filter'>Find contacts by name:</FormLabel>

        <InputGroup>
            <Input
                id="filter"
                type="text"
                name="filter"
                onChange={handlerChangeFilter}
                value={value}
            />
        </InputGroup>
    </FormControl>

);
}

export default Filter;