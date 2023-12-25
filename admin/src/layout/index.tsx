import "./../assets/style/AdminNavbar.scss";

import { Link, useNavigate } from "react-router-dom";

import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";

type Props = {};

function AdminNavbar({}: Props) {
  const isLogged = useSelector(
    (state: RootState) => state.loginpage.loginValue
  );

  const navigate = useNavigate();
  // console.log("isLogged", isLogged);
  // if (isLogged) {
  //   navigate("/home");
  // }
  return (
    <nav>
      {isLogged ? (
        <div className="container">
          <div className="left">
            <h1>Admin</h1>
          </div>
          <ul>
            <li>
              <Link to="/addUser">AddUser</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
}

export default AdminNavbar;
