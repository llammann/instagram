import Login from "./../pages/login";
import AdminRoot from "./../pages/adminRoot";
import Home from "./../pages/home";
import AddUser from "./../pages/addUser";

export const routes = [
  {
    path: "/",
    element: <AdminRoot />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "addUser",
        element: <AddUser />,
      },
    ],
  },
];
