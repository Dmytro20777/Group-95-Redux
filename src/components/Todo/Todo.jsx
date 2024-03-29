import { Text } from 'components';
import style from './Todo.module.css';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { addCurrentTodo, deleteTodo } from '../../redux/todosSlice';

export const Todo = ({ id, counter, text }) => {
  const dispatch = useDispatch();
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO # {counter}
      </Text>

      <Text>{text}</Text>
      <button
        className={style.deleteButton}
        type="button"
        onClick={() => dispatch(deleteTodo(id))}
      >
        <RiDeleteBinLine size={24} />
      </button>
      <button className={style.editButton} type="button" onClick={ () => dispatch(addCurrentTodo({text, id}))}>
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};
