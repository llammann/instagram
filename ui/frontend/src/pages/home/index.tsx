import "./../../assets/style/Home.scss";

import axios from "axios";
import { useEffect, useState } from "react";
import Logout from "../../components/Logout";
// import { useSelector } from "react-redux";

type Props = {};

function Home({}: Props) {
  const [data, setData] = useState([]);
  const token = JSON.parse(localStorage.getItem("token") || "{}");
  // console.log("your token", token.refToken);
  useEffect(() => {
    axios
      .get("http://localhost:3333/users", {
        headers: {
          Authorization: `Bearer ${token.token}`,
          RefreshToken: `Bearer ${token.refToken}`,
        },
      })
      .then((res) => {
        // console.log("buraaa", res.data);
        setData(res.data);
      });
  }, []);

  // const users = useSelector((state: RootState) => state.user.users);

  return (
    <>
    <Logout/>
      <ul>
        {data && data.map((elem: any, i) => <li key={i}>{elem.username}</li>)}
      </ul>
    </>
  );
}

export default Home;
