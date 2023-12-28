import "./../../assets/style/Login.scss";
import loginImg from "./../../assets/images/login@4x.png";

import * as Yup from "yup";

import axios from "axios";

import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";

interface MyFormValues {
  username: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required")
    .matches(/^[a-z ,.'-]+$/i),

  password: Yup.string()
    .required("Required")
    .matches(/^[A-Za-z0-9._%+-]+$/),
});

function Login() {
  // // const dispatch = useDispatch();

  const navigate = useNavigate();
  const initialValues: MyFormValues = {
    username: "",
    password: "",
  };
  return (
    <>
      <section className="login">
        <div className="container">
          <div className="sideImage">
            <div className="imgWrapper">
              <img src={loginImg} alt="" />
            </div>
          </div>
          <div className="myForm">
            <h1>Login</h1>
            <Formik
              className="formik"
              initialValues={initialValues}
              validationSchema={LoginSchema}
              onSubmit={async (values) => {
                console.log(values);
                alert(JSON.stringify(values, null, 2));

                axios
                  .post("http://localhost:3333/login/", values)
                  .then((res) => {
                    console.log("res", res.data);
                    // alert(res.data);
                    localStorage.setItem("token", JSON.stringify(res.data));
                    if (res.status == 222) {
                      alert("Welcome!");
                      navigate("/home");
                    }
                    if (res.status == 221) {
                      alert("Login failed..");
                    }
                  });
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <Field id="username" name="username" placeholder="Username" />
                  {errors.username && touched.username ? (
                    <div>{errors.username}</div>
                  ) : null}
                  <br />

                  <Field id="password" name="password" placeholder="Password" />
                  {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                  ) : null}
                  <br />

                  <button id="loginBtn" type="submit">
                    Login
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
