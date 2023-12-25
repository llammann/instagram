import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/index";

import axios from "axios";

export const getAllUsers = createAsyncThunk("homepage/getAllUsers", async () => {
  const response = await axios.get("https://igusers.onrender.com/users");
  return response.data;
});

// Define a type for the slice state
interface HomeState {
  users: object[];
}

// Define the initial state using that type
const initialState: HomeState = {
  users: [],
};

export const HomeSlice = createSlice({
  name: "homepage",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const {  } = HomeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.loginpage.value;

export default HomeSlice.reducer;
