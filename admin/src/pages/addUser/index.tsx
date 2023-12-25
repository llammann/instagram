//form for add user
import "./../../assets/style/AddUser.scss";

import Formx from "../../components/Form";
import AdminNavbar from "../../layout";
type Props = {};

function index({}: Props) {
  return (
    <>
      <AdminNavbar />
      <section className="main">
        <div className="container">
          <div className="header">
            <h1>Add user</h1>
          </div>
          <div className="addUserForm">
            <Formx />
          </div>
        </div>
      </section>
    </>
  );
}

export default index;
