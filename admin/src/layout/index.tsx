import "./../assets/style/AdminNavbar.scss";
import { useSelector } from "react-redux";
import type { RootState } from "./../redux/store";
import { Link, useNavigate } from "react-router-dom";
type Props = {};

function AdminNavbar({}: Props) {
  const isLogged = useSelector((state: RootState) => state.homepage.loginValue);
  console.log("infoo", isLogged);
  const navigate = useNavigate();
  isLogged ? navigate("/home") : null;
  return (
    <nav>
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
    </nav>
  );
}

export default AdminNavbar;
