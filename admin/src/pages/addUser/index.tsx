//form for add user
import "./../../assets/style/AddUser.scss";

import Formx from "../../components/Form";
type Props = {};

function index({}: Props) {
  return (
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
  );
}

export default index;
