const { Contact } = require('../../models/contact');

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const results = await Contact.find({ owner }, '-createdAt -updatedAt', { skip, limit }).populate(
    'owner',
    'email'
  );
  res.json(results);
};

module.exports = getAll;
