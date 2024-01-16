import { createSlice } from "@reduxjs/toolkit";

export const TaskReducers = createSlice({
  name: "TaskReducers",
  initialState: {
    tasks: [],
  },
  reducers: {
    createTask: (state: any, action: any) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state: any, action: any) => {
      const item = state.tasks.find(
        (item) => item.title === action.payload.title
      );
      const index = state.tasks.indexOf(item);
      state.tasks.splice(index, 1);
    },
    changeStatus: (state: any, action: any) => {
      const item = state.tasks.find(
        (item) => item.title === action.payload.title
      );
      const index = state.tasks.indexOf(item);
      state.tasks[index].status = action.payload.status
    },
  },
});

export const { createTask, removeTask , changeStatus} = TaskReducers.actions;
export default TaskReducers.reducer;
