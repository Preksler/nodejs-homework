const { Contact } = require('../../models/contact');

const { RequestError } = require('../../helpers');

const getById = async (req, res) => {
  const { contactId } = req.params;
  const results = await Contact.findById(contactId);
  if (!results) {
    throw RequestError(404, 'Not found');
  }
  res.json(results);
};

module.exports = getById;
