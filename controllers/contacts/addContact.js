const { Contact } = require('../../models/contact');

const addContact = async (req, res) => {
  const { _id: owner } = req.user;
  const results = await Contact.create({ ...req.body, owner });
  res.status(201).json(results);
};

module.exports = addContact;
