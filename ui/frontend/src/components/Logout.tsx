import axios from "axios";
type Props = {};

function Logout({}: Props) {
  return (
    <button
      className="logout"
      onClick={() => {
        const token = JSON.parse(localStorage.getItem("token") || "{}");
        // console.log("your token", token.refToken);

        axios
          .post("http://localhost:3333/logout", {},{
            headers: {
              Authorization: `Bearer ${token.token}`,
              RefreshToken: `Bearer ${token.refToken}`,
            },
          })
        //   .then((res) => {
        //     console.log("buraaa", res.data);
        //   });

        localStorage.removeItem("token");
      }}
    >
      Logout
    </button>
  );
}

export default Logout;
