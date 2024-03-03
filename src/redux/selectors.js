import { createSelector } from '@reduxjs/toolkit';

export const selectTodos = state => state.todos.items;

export const selectFilter = state => state.filter.name;

export const selectCurrentTodo = state => state.todos.currentTodo;

export const selectVisibleTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);
