import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import Search from "../pages/search";
import Detail from "../pages/detail";
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
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/search/:id",
        element: <Detail />,
      },
    ],
  },
];
