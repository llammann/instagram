import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "../types";

export const getAllUsers = createAsyncThunk<
  Array<object>,
  void,
  { dispatch: AppDispatch }
>("user/getAllUsers", async (_, { dispatch }) => {
  const response = await axios.get("http://localhost:3333/users");
  return response.data;
});

export interface UserStateTy {
  isLogin: boolean;
  users: object[];
  loading: Boolean;
  error: any;
}

interface User {
  username: string;
  password: string;
}
const initialState: UserStateTy = {
  isLogin: false,
  users: [],
  loading: false,
  error: "",
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ username: string; password: string }>
    ) => {
      console.log("getallusers", current(state.users));
      console.log("action.payloayd", action.payload);
      const loginUser = state.users.find(
        (user: any) =>
          user.password == action.payload.password &&
          user.username == action.payload.username
      );
      if (loginUser) {
        state.isLogin = true;
        console.log("you logged inn");
      } else {
        state.isLogin = false;
        console.log("you couldn't login");
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { login } = UserSlice.actions;

export default UserSlice.reducer;
