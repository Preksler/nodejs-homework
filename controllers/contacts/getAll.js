const contacts = require("../../models/contacts");

const getAll = async (req, res, next) => {
  try {
    const results = await contacts.listContacts();
    res.json(results);
  } catch (error) {
    next(error);
  }
}

module.exports = getAll;