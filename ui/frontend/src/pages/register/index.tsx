import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";

import * as Yup from "yup";

interface MyFormValues {
  username: string;
  surname: string;
  email: string;
  password: string;
}

const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required")
    .matches(/^[a-z ,.'-]+$/i),

  surname: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required")
    .matches(/^[a-z ,.'-]+$/i),

  email: Yup.string().email("Invalid email").required("Required"),

  password: Yup.string()
    .required("Required")
    .matches(/^[A-Za-z0-9._%+-]+$/),
});

function Register() {
  const navigate = useNavigate();
  const initialValues: MyFormValues = {
    username: "",
    surname: "",
    email: "",
    password: "",
  };

  return (
    <>
      <div>
        <h1>Register</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={RegisterSchema}
          onSubmit={(values) => {
            console.log(values);
            alert(JSON.stringify(values, null, 2));

            const newUser = {
              ...values,
              bio: {},
              isPublic: true,
              posts: [],
              followers: [],
              following: [],
              blockList: [],
              stories: [],
              notifications: [],
              isAdmin: false,
            };

            console.log(newUser);
            axios.post("http://localhost:3333/users", newUser).then((res) => {
              console.log(res);
              alert(res.data);

              if (res.status == 203) {
                navigate("/");
              }
            });
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <label htmlFor="username">Username</label>
              <Field id="username" name="username" placeholder="Username" />
              {errors.username && touched.username ? (
                <div>{errors.username}</div>
              ) : null}
              <br />

              <label htmlFor="surname">Surname</label>
              <Field id="surname" name="surname" placeholder="Surname" />
              {errors.surname && touched.surname ? (
                <div>{errors.surname}</div>
              ) : null}
              <br />

              <label htmlFor="email">Email</label>
              <Field id="email" name="email" placeholder="Email" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <br />

              <label htmlFor="password">Password</label>
              <Field id="password" name="password" placeholder="Password" />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
              <br />

              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default Register;
