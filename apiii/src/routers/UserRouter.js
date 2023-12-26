const express = require("express");
const UserController = require("./../controllers/UserController"); // new
const router = express.Router();

router.get("/users", UserController.getAllUsers);
router.post("/users", UserController.postUser);
router.get("/users/:id", UserController.getUserById);
router.delete("/users/:id", UserController.deleteUser);
router.patch("/users/:id", UserController.getUpdateUser);
router.put("/users/:id", UserController.putUser);
router.post("/login", UserController.login);

module.exports = router;
