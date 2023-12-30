import axios from "axios";
import { useEffect, useState } from "react";

import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../types";

const token = JSON.parse(localStorage.getItem("token") || "{}");

export const getAllUsers = createAsyncThunk<
  Array<object>,
  void,
  { dispatch: AppDispatch }
>("user/getAllUsers", async (_, { dispatch }) => {
  const response = await axios.get("http://localhost:3333/users", {
    headers: {
      Authorization: `Bearer ${token.token}`,
      RefreshToken: `Bearer ${token.refToken}`,
    },
  });
  return response.data;
});

export interface UserStateTy {
  isLogin: boolean;
  users: object[];
  loading: Boolean;
  error: any;
  searchedValue: object[];
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
  searchedValue: [],
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // login: (
    //   state,
    //   action: PayloadAction<{ username: string; password: string }>
    // ) => {
    //   console.log("getallusers", current(state.users));
    //   console.log("action.payloayd", action.payload);
    //   const loginUser = state.users.find(
    //     (user: any) =>
    //       user.password == action.payload.password &&
    //       user.username == action.payload.username
    //   );
    //   if (loginUser) {
    //     state.isLogin = true;
    //     console.log("you logged inn");
    //   } else {
    //     state.isLogin = false;
    //     console.log("you couldn't login");
    //   }
    // },

    search: (state, action: PayloadAction<string>) => {
      console.log("search", action.payload);
      let data: object[] = [];
      const token = JSON.parse(localStorage.getItem("token") || "{}");
      // console.log("your token", token.refToken);

      axios
        .get("http://localhost:3333/users", {
          headers: {
            Authorization: `Bearer ${token.token}`,
            RefreshToken: `Bearer ${token.refToken}`,
          },
        })
        .then((res) => {
          // console.log("buraaa", res.data);
          data = res.data;
        });

      if (action.payload) {
        state.searchedValue = data.filter((elem: any) => {
          return elem.username
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        });
      } else {
        state.searchedValue = data;
      }
    },


    // follow: (state, action: PayloadAction<string>) => {
    //   console.log("search", action.payload);
    //   // const token = JSON.parse(localStorage.getItem("token") || "{}");
    //   // // console.log("your token", token.refToken);

    //   // axios
    //   //   .patch(`http://localhost:3333/${action.payload}`, {
    //   //     headers: {
    //   //       Authorization: `Bearer ${token.token}`,
    //   //       RefreshToken: `Bearer ${token.refToken}`,
    //   //     },
    //   //   })
    //   //   .then((res) => {
    //   //     // console.log("buraaa", res.data);
    //   //     data = res.data;
    //   //   });

    //  let user =JSON.parse(localStorage.getItem("loggedUser") || {})

    //  user.following.push()
    // },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      console.log("sliceeUserss", state.users);
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { search } = UserSlice.actions;

export default UserSlice.reducer;
