const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const refTokens = [];

// GET ALL USERS
const getAllUsers = async (req, res) => {
  let allUsers = await User.find({});
  res.send(allUsers);
  console.log("TEST ALL USERS");
  console.log("MY HEADERS", req?.headers);
};

// const logout = async (req, res) => {
//   console.log("before logout", refTokens);
//   // console.log("logout req.body", req.body);

//   const refToken = req?.headers?.refreshtoken?.split(" ")[1];

//   if (!refToken) {
//     return res.status(440).send("no refresh token");
//   }
//   try {
//     const index = refTokens.indexOf(refToken);
//     if (index != -1) {
//       refTokens.splice(index, 1);
//     }
//     console.log("after logout", refTokens);
//     res.status(444).send("logout succesfully");
//     return;
//   } catch (error) {
//     console.error("Logout failed", error);
//     res.status(440).send("inter ser err");
//     return;
//   }
// };

// !login
// LOGIN USER
const login = async (req, res) => {
  const user = new User(req.body);

  const validUser = await User.findOne({
    username: user.username,
    password: user.password,
  });

  try {
    if (validUser) {
      // access token
      const token = jwt.sign(
        { username: user.username, password: user.password },
        process.env.SECRET_TOKEN,
        {
          expiresIn: "10",
        }
      );

      // refresh token
      const refToken = jwt.sign(
        { username: user.username, password: user.password },
        process.env.REFRESH_TOKEN
      );

      refTokens.push(refToken);
      console.log("tokenss", refTokens);

      res.status(222).send({ token, refToken });
      // localStorage.setItem("loggedUser", JSON.stringify(validUser));
      return;
    } else {
      res.status(221).send("no valid input");
      return;
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).send("Internal server error");
  }
};
// !login

// POST USER
const postUser = async (req, res) => {
  const newUser = new User(req.body);

  const validUsername = await User.findOne({ username: newUser.username });

  const validEmail = await User.findOne({ email: newUser.email });

  try {
    if (validUsername) {
      res.status(200).send("there is already user with this Username");
    }

    if (validEmail) {
      res.status(201).send("there is already user with this Email");
    } else {
      newUser.save();
      console.log("POST USER");

      res.status(203).send("Successful Registration!");
    }
  } catch (error) {
    alert("limon", error);
  }
};

// DELETE USER
const deleteUser = async (req, res) => {
  let Userid = req.params.id;
  let deletedUser = await User.findByIdAndDelete(Userid);
  console.log("DELETE USER", deletedUser);
};

// GET USER BY ID
const getUserById = async (req, res) => {
  let Userid = req.params.id;
  let findUser = await User.findOne({ _id: Userid });
  res.send(findUser);

  console.log("GET USER BY ID");
};

// GET UPDATE USER
const getUpdateUser = async (req, res) => {
  let Userid = req.params.id;
  let updatedUser = await User.findOneAndUpdate({ _id: Userid }, req.body);
  console.log("GET UPDATE USER", updatedUser);
};

// PUT USER
const putUser = async (req, res) => {
  let Userid = req.params.id;
  let updatedUser = await User.replaceOne({ _id: Userid }, req.body);
  console.log("PUT USER", updatedUser);
};

module.exports = {
  postUser,
  getAllUsers,
  deleteUser,
  getUserById,
  getUpdateUser,
  putUser,
  login,
  refTokens,
  // logout,
};
