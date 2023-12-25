// table users,notification,posts
import "./../../assets/style/Home.scss";

import Tablex from "../../components/Table";
import AdminNavbar from "../../layout";

type Props = {};

function index({}: Props) {
  return (
    <>
      <AdminNavbar />
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
