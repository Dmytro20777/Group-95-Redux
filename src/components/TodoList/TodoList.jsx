import { Grid, GridItem, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectVisibleTodos } from '../../redux/selectors';

export const TodoList = () => {
  const visibleTodos = useSelector(selectVisibleTodos);
  return (
    <>
      {!visibleTodos.length ? (
        <Text textAlign="center">We did not find any todo😯</Text>
      ) : (
        <Grid>
          {visibleTodos.map((todo, idx) => (
            <GridItem key={todo.id}>
              <Todo {...todo} counter={idx + 1} />
            </GridItem>
          ))}
        </Grid>
      )}
    </>
  );
};
