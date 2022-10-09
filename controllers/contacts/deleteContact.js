const contacts = require("../../models/contacts");

const { RequestError } = require("../../helpers");

const deleteContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const results = await contacts.removeContact(contactId);
    if (!results) {
      throw RequestError(404, "Not found");
    }
    res.json({
      "message": "contact deleted"
    });
  } catch (error) {
    next(error);
  }
}

module.exports = deleteContact;