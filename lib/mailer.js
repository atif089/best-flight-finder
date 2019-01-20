const config = require('../config');
const nodemailer = require('nodemailer');
const authTransport = config.mailer.authTransport;

function mailer(mailData) {
  this.mailOptions = {
    to      : process.env.toEmail,
    cc      : process.env.ccEMail,
    subject : 'Skyscanner Tickets Price List',
    html    : '',
    text    : mailData
  };  
}

mailer.prototype.sendMail = function sendMail() {

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport(authTransport);

  // send mail with defined transport object
  transporter.sendMail(this.mailOptions, function(error, info) {
    if (error) {
      return new Error(error);
    }
    console.log('Message sent: ' + info.response);
  });
};

module.exports = mailer;
