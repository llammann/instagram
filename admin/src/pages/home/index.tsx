// table users,notification,posts
import "./../../assets/style/Home.scss";
import { useEffect } from "react";
import axios from "axios";
import Tablex from "../../components/Table";

import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./../../redux/store";
import { getAllUsers } from "./../../redux/slices/HomeSlice";

type Props = {};

function index({}: Props) {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.homepage.users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  console.log(users);

  return (
    <>
      <section className="main">
        <div className="container">
          <div className="header">
            <h1>Users Table</h1>
          </div>
          <div className="usersTable">
            <Tablex />
          </div>
        </div>
      </section>
    </>
  );
}

export default index;
