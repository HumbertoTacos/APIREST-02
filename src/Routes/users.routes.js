const express = require("express");
const controller = require("../Controller/users.controller");
const router = express.Router();

router.get("/", controller.findAll);
router.get("/:id", controller.findById);
router.post("/", controller.addUser);
router.put("/:id", controller.updateUser);

module.exports = router;