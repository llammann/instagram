import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/index";

import axios from "axios";

// Define a type for the slice state
interface LoginState {
  loginValue: Boolean;
  allUsers: Object[];
}

// Define the initial state using that type
const initialState: LoginState = {
  loginValue: false,
  allUsers: [],
};

export const LoginSlice = createSlice({
  name: "loginpage",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    isLogin: async (
      state,
      action: PayloadAction<{ password: String; username: String }>
    ) => {
      //   console.log(action.payload); getting obj with input values
      let users: any = [];

      await axios.get("https://igusers.onrender.com/users").then((res) => {
        console.log(res.data);
        users = res.data;
        current(state).allUsers = res.data;
      });

      let admin = users.find(
        (user: any) =>
          user.isAdmin &&
          user.password == action.payload.password &&
          user.username == action.payload.username
      );

      if (admin) {
        state.loginValue = true;
        console.log("Adminn");
        console.log(state.loginValue);
      } else {
        console.log("no admin");
      }
    },

    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    // },
  },
});

export const { isLogin } = LoginSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.loginpage.value;

export default LoginSlice.reducer;
