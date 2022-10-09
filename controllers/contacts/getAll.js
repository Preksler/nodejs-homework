const { Contact } = require('../../models/contact');

const getAll = async (req, res) => {
  const results = await Contact.find({});
  res.json(results);
};

module.exports = getAll;
