import { useDispatch, useSelector } from 'react-redux';
import style from './Filter.module.css';
import { selectFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <input
      className={style.input}
      placeholder="Find it"
      name="filter"
      onChange={e => dispatch(setFilter(e.target.value))}
      value={filter}
    />
  );
};
