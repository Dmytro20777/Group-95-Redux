import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import style from './Form.module.css';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todosSlice';

export const Form = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const handleChange = e => {
    setQuery(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const todo = {
      id: nanoid(),
      text: query,
    };
    dispatch(addTodo(todo));
    setQuery('');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
        value={query}
        onChange={handleChange}
      />
    </form>
  );
};
