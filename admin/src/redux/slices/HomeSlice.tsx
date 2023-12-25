import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/index";

import axios from "axios";

export const getAllUsers = createAsyncThunk<HomeState>(
  "homepage/getAllUsers",
  async () => {
    let response = await axios.get("https://igusers.onrender.com/users");
    return response.data;
  }
);

// interface UserType {
//   users: Object[];
// }

// Define a type for the slice state
export interface HomeState {
  loginValue: Boolean;
  users: object[];
  loading: Boolean;
  error: any;
}

// Define the initial state using that type
const initialState: HomeState = {
  loginValue: false,
  users: [],
  loading: false,
  error: "",
};

export const HomeSlice = createSlice({
  name: "homepage",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    isLogin: (
      state,
      action: PayloadAction<{ password: string; username: string }>
    ) => {
      console.log("isLogin,actionpayload", action.payload);
      console.log("state.users", state.users);

      let admin = state.users.find(
        (user: any) =>
          user.isAdmin === true &&
          user.password == action.payload.password &&
          user.username == action.payload.username
      );
      console.log("admin", admin);
      console.log("users", state.users);
      if (admin) {
        state.loginValue = true;
        console.log("Adminn");
        console.log(state.loginValue);
      } else {
        state.loginValue = false;
        console.log("no admin");
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

export const { isLogin } = HomeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.loginpage.value;

export default HomeSlice.reducer;
