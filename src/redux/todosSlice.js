import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    currentTodo: null
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,

  reducers: {
    addTodo(state, { payload }) {
      //   state.items.push(payload);
      state.items = [...state.items, payload];
    },
    deleteTodo(state, { payload }) {
      console.log(payload);
      state.items = state.items.filter(item => item.id !== payload);
      },
      addCurrentTodo(state, { payload }) {
          state.currentTodo = payload;
      },
      updateTodo(state, { payload }) {
          state.items = state.items.map((item) => {
              return item.id === state.currentTodo.id ? {text: payload, id: state.currentTodo.id} : item
          })
      }
  },
});

export const { addTodo, deleteTodo, addCurrentTodo, updateTodo } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
