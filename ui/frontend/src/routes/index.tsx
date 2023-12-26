import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import UserRoot from "../pages/userRoot";

export const routes = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
];
