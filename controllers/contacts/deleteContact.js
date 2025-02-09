const { Contact } = require('../../models/contact');

const { RequestError } = require('../../helpers');

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const results = await Contact.findByIdAndRemove(contactId);
  if (!results) {
    throw RequestError(404, 'Not found');
  }
  res.json({
    message: 'contact deleted',
  });
};

module.exports = deleteContact;
