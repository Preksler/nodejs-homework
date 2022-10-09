const contacts = require("../../models/contacts");

const { RequestError } = require("../../helpers");

const { addSchema } = require("../../schemas/contact");

const updateById = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw RequestError(400, "missing fields");
    }
    const { contactId } = req.params;
    const results = await contacts.updateContact(contactId, req.body);
    if (!results) {
      throw RequestError(404, "Not found");
    }
    res.status(201).json(results);
  } catch (error) {
    next(error);
  }
}

module.exports = updateById;