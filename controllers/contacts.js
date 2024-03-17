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
  try {
    const result = await contacts.addContact(req.body);
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
    if (!result) {
      return res.status(404).json({
        message: "Not found",
      });
    }

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const updateFavoriteContact = async (req, res, next) => {
  if (req.body.favorite === undefined) {
    res.status(400).json({
      message: "missing field favorite",
    });
  }
  const { contactId } = req.params;

  try {
    const result = await contacts.updateStatusContact(contactId, req.body);
    if (!result) {
      return res.status(404).json({
        message: "Not found",
      });
    }

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
  updateFavoriteContact,
};
