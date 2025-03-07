const express = require("express");
const usersController = require("../controllers/users");
const router = express.Router();
const {authenticate} = require('../middleware')

router.get("/", authenticate, usersController.getAllUsers);

router.get("/:id", authenticate, usersController.getUserById);

router.post("/", authenticate, usersController.createUser);

router.put("/:id", authenticate, usersController.updateUserById);

router.delete("/:first_name",  authenticate,usersController.deleteUserByFirstName);

module.exports = router;
