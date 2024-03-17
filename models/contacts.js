// const { nanoid } = require("nanoid");

const { Contacts } = require("../schemas/contacts");

const listContacts = async () => {
  return Contacts.find();
};

const getContactById = async (contactId) => {
  return Contacts.findOne({ _id: contactId });
};

const removeContact = async (contactId) => {
  return Contacts.findByIdAndDelete({ _id: contactId });
};

const addContact = async (data) => {
  const { name, email, phone } = data;
  return Contacts.create({ name, email, phone });
};

const updateContact = async (contactId, body) => {
  return Contacts.findByIdAndUpdate({ _id: contactId }, body, { new: true });
};

const updateStatusContact = async (contactId, body) => {
  return Contacts.findByIdAndUpdate({ _id: contactId }, body, { new: true });
};
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
};
