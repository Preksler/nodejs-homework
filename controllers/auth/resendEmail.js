const { User } = require('../../models/user');

const { RequestError, sendEmail } = require('../../helpers');

const { BASE_URL } = process.env;

const resendEmail = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(400).json({
      message: 'missing required field email',
    });
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw RequestError(404);
  }
  const mail = {
    to: email,
    subject: 'Verify email',
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${user.verificationToken}">Click to verify you email</a>`,
  };
  await sendEmail(mail);
  res.json({
    message: 'Email send success',
  });
};

module.exports = resendEmail;
