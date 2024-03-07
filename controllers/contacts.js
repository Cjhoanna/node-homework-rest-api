const contacts = require("../models/contacts");

const getContacts = async (req, res, next) => {
  try {
    const result = await contacts.listContacts();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  try {
    const result = await contacts.getContactById(contactId);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
const addContact = async (req, res, next) => {
  const data = req.body;
  try {
    // const result = await contacts.addContact(req.body);
    const result = await contacts.addContact(data);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const deleteContact = async (req, res, next) => {
  const { contactId } = req.params;
  try {
    const result = await contacts.removeContact(contactId);

    return res.status(200).json({
      message: "contact deleted",
    });
  } catch (error) {
    next(error);
  }
};

const updateContact = async (req, res, next) => {
  const { contactId } = req.params;
  try {
    const result = await contacts.updateContact(contactId, req.body);

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getContacts,
  getById,
  addContact,
  deleteContact,
  updateContact,
};
