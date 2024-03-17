const express = require("express");
const controller = require("../../controllers/contacts");

const router = express.Router();

router.get("/", controller.getContacts);

router.get("/:contactId", controller.getById);

router.post("/", controller.addContact);

router.delete("/:contactId", controller.deleteContact);

router.put("/:contactId", controller.updateContact);

router.patch("/:contactId/favorite", controller.updateFavoriteContact);

module.exports = router;
