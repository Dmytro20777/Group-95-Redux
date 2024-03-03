import {
  Section,
  Container,
  Header,
  Text,
  TodoList,
  Form,
  Filter,
} from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from './redux/selectors';

export const App = () => {
  const todos = useSelector(selectTodos);
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Form />
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
