import {
  Section,
  Container,
  Header,
  Text,
  TodoList,
  Form,
  Filter,
  EditForm,
} from 'components';
import { useSelector } from 'react-redux';
import { selectCurrentTodo, selectTodos } from './redux/selectors';

export const App = () => {
  const todos = useSelector(selectTodos);
  const isEdit = useSelector(selectCurrentTodo)
  return (
    <>
      <Header />
      <Section>
        <Container>
          {!isEdit ? <Form /> : <EditForm/> }
          {!todos.length ? (
            <Text textAlign="center">Create your first todo😉</Text>
          ) : (
            <>
              <Filter />
              <TodoList />
            </>
          )}
        </Container>
      </Section>
    </>
  );
};
