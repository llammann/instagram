import "./../../assets/style/Search.scss";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { getAllUsers, search } from "../../redux/slices/UserSlice";

// import type { RootState } from "./../../redux/store";
// import { AppDispatch } from "./../../redux/types";

import axios from "axios";
import { useEffect, useState } from "react";

type Props = {};

function Search({}: Props) {
  //   const dispatch = useDispatch<AppDispatch>();

  //   useEffect(() => {
  //     dispatch(getAllUsers);
  //   }, [dispatch]);

  const [data, setData] = useState([]);
  const [searchedValue, setSearchedValue] = useState("");
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

  //   const handleSearch = (value:any) => {
  //     setSearchedValue(value);
  //   };
  console.log(data);
  console.log(searchedValue);
  let searchResult = searchedValue
    ? data.filter((elem: any) =>
        elem.username.toLowerCase().includes(searchedValue.toLowerCase())
      )
    : [];
  console.log("searchResult", searchResult);
  return (
    <>
      <section className="searchSection">
        <div className="container">
          <div className="search">
            <input
              type="text"
              placeholder="Search.."
              onChange={(e) => {
                // console.log(e.target.value)
                setSearchedValue(e.target.value);
              }}
            />
          </div>
        </div>
      </section>

      <section className="resultSection">
        <div className="container">
          <ul>
            {searchResult.map((elem: any, i) => (
              <Link to={`/search/${elem?._id}`} key={i}>
                <li>
                  <div className="left">
                    <div className="imgWrapper">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4dF9ZdBwqzTFpQYw28vkw08ghbbWBkPKUVU4lpszolXn8GitxZvF61d9PpL7OnuFziIc&usqp=CAU"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="right">
                    <div className="details">
                      <p className="username">{elem.username}</p>
                      <p className="bio">{elem.bio?.info}</p>
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Search;
