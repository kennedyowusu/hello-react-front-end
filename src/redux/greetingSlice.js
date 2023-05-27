import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const readGreeting = createAsyncThunk('greeting', async () => {
  const options = {
    method: 'GET',
    url: 'http://127.0.0.1:3000/api/v1/greetings',
  };
  const response = await axios.request(options);

  const greeting = response.data;
  return greeting;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    data: [],
    isFulfilled: false,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(readGreeting.fulfilled, (state, action) => {
      state.isFulfilled = true;
      state.data = action.payload;
    });
  },
});

export default greetingSlice;
export { readGreeting };
