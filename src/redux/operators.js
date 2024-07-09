import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://668c2ba00b61b8d23b0ca4de.mockapi.io/";

export const fetchTasks = createAsyncThunk(
    "tasks/fetchAll",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/tasks");
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  export const addTask = createAsyncThunk(
    "tasks/addTask",
    async ({ text }, thunkAPI) => {
      try {
        const response = await axios.post("/tasks",  { text} );
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  
  export const deleteTask = createAsyncThunk(
    "tasks/deleteTask",
    async (Id, thunkAPI) => {
      try {
        const response = await axios.delete(`/tasks/${Id}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );