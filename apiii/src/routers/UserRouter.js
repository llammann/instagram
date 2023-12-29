const express = require("express");
const UserController = require("./../controllers/UserController"); // new
const router = express.Router();

const userAuth = require("./../middleware/userAuthMidd");

router.get("/users", UserController.getAllUsers);
router.post("/users", UserController.postUser);
router.get("/users/:id", UserController.getUserById);
router.delete("/users/:id", UserController.deleteUser);
router.patch("/users/:id", UserController.getUpdateUser);
router.put("/users/:id", UserController.putUser);
router.post("/login", UserController.login);
// router.post("/logout", UserController.logout);

module.exports = router;
