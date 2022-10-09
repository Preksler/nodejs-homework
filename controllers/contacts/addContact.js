const contacts = require("../../models/contacts");

const { RequestError } = require("../../helpers");

const { addSchema } = require("../../schemas/contact");

const addContact = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw RequestError(400, "missing required name field");
    }
    const results = await contacts.addContact(req.body);
    res.status(201).json(results);
  } catch (error) {
    next(error);
  }
}

module.exports = addContact;