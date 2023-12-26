const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");

// GET ALL USER
const getAllUsers = async (req, res) => {
  let allUsers = await User.find({});
  res.send(allUsers);
  console.log(req.body);
  console.log("GET ALL USER");
};

// !login
// LOGIN USER
const login = async (req, res) => {
  const user = new User(req.body);

  // ?token
  console.log("USERRR", req.body);
  const token = jwt.sign(
    { username: user.username, password: user.password },
    process.env.SECRET_TOKEN
    // {
    // expiresIn: '1h',
    // }
  );
  console.log("TOKEN", token);
  // ?token

  const validUsername = await User.findOne({ username: user.username });

  const validPassword = await User.findOne({ password: user.password });

  try {
    if (validUsername && validPassword) {
      res.status(222).send("Welcome!");
    } else {
      res.status(221).send("Login failed..");
    }
  } catch (error) {
    alert("limon", error);
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
};
