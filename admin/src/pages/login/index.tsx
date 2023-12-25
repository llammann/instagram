// admin login
import Login from "../../components/Login";
import "./../../assets/style/Login.scss";


const App: React.FC = () => {

  return (
    <div className="adminForm">
      <div className="container">
        <Login />
      </div>
    </div>
  );
};

export default App;
