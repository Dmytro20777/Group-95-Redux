import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: {
    name: '',
  },
  reducers: {
    setFilter: (state, { payload }) => {
      state.name = payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;

export const filterReduser = filtersSlice.reducer;
