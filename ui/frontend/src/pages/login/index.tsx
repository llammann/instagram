import type { RootState } from "./../../redux/store";
import { AppDispatch } from "./../../redux/types";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers, login, UserStateTy } from "../../redux/slices/UserSlice";

import axios from "axios";

import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";

interface MyFormValues {
  username: string;
  password: string;
}

function Login() {
  const dispatch = useDispatch<AppDispatch>();
  // const dispatch=useDispatch()

  const isLogged = useSelector((state: RootState) => state.user.isLogin);
  const users = useSelector((state: RootState) => state.user.users);
  console.log("isLogged?", isLogged);
  console.log("Allllllusers?", users);
  const navigate = useNavigate();
  const initialValues: MyFormValues = {
    username: "",
    password: "",
  };
  return (
    <>
      <div>
        <h1>Login</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            console.log(values);
            alert(JSON.stringify(values, null, 2));

            dispatch(login(values));
            // await Promise.resolve(); // Ensure the login action is processed before calling getAllUsers
            await dispatch(getAllUsers());

            axios.post("http://localhost:3333/login/", values).then((res) => {
              console.log(res);
              alert(res.data);
              if (res.status == 222) {
                navigate("/home");
              }
            });
          }}
        >
          <Form>
            <label htmlFor="username">Username</label>
            <Field id="username" name="username" placeholder="Username" />

            <br />

            <label htmlFor="password">Password</label>
            <Field id="password" name="password" placeholder="Password" />

            <br />

            <button type="submit">Login</button>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default Login;
