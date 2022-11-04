const nodemailer = require('nodemailer');

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: 'preksler@meta.ua',
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async data => {
  const mail = { ...data, from: 'preksler@meta.ua' };
  // transport
  //   .sendMail(mail)
  //   .then(() => console.log('Email send success'))
  //   .catch(error => console.log(error.message));
  await transport.sendMail(mail);
  return true;
};

module.exports = sendEmail;
