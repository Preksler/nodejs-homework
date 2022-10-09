const { Contact } = require('../../models/contact');

const { RequestError } = require('../../helpers');

const updateFavorite = async (req, res) => {
  const { contactId } = req.params;
  const results = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });
  if (!results) {
    throw RequestError(404, 'Not found');
  }
  res.status(201).json(results);
};

module.exports = updateFavorite;
