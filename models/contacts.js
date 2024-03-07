const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path");
const contactPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  const contacts = await fs.readFile(contactPath);
  return JSON.parse(contacts);
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const result = contacts.find((contact) => contact.id === contactId);
  return result;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const newContacts = contacts.filter((contact) => contact.id !== contactId);
  await fs.writeFile(contactPath, JSON.stringify(newContacts));
  return newContacts;
};

const addContact = async (data) => {
  const { name, email, phone } = data;
  console.log(name, email, phone);
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name: name,
    email: email,
    phone: phone,
  };
  contacts.push(newContact);
  await fs.writeFile(contactPath, JSON.stringify(contacts));
  return newContact;
};

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === contactId);
  if (index === -1) {
    return null;
  }
  const update = Object.assign({}, contacts[index], body);
  contacts[index] = update;
  await fs.writeFile(contactPath, JSON.stringify(contacts, null, 2));
  return contacts[index];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
