const express = require("express");
const controller = require("../../controllers/contacts");
const joiContacts = require("../../schemas/contacts");
const joiValidation = require("../../middlewares.js/joivalidation");

const router = express.Router();

router.get("/", controller.getContacts);

router.get("/:contactId", controller.getById);

router.post("/", joiValidation(joiContacts), controller.addContact);

router.delete("/:contactId", controller.deleteContact);

router.put("/:contactId", controller.updateContact);

module.exports = router;
