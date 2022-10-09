const contacts = require("../../models/contacts");

const { RequestError } = require("../../helpers");

const getById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const results = await contacts.getContactById(contactId);
    if (!results) {
      throw RequestError(404, "Not found");
    }
    res.json(results);
  } catch (error) {
    next(error);
  }
}

module.exports = getById;