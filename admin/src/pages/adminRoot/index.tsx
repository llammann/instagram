import { Outlet } from "react-router-dom";
import AdminNavbar from "./../../layout";

type Props = {};

function index({}: Props) {
  return (
    <>
      <AdminNavbar />
      <Outlet />
    </>
  );
}

export default index;
