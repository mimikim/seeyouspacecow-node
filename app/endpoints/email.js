// email endpoint
const creds = require('./creds');

let express = require('express');
let router = express.Router();
let nodemailer = require('nodemailer');

// POST to create new object
router.post('/mail', function(req, res) {
  let name = req.body['form-name'];
  let email = req.body['form-email'];
  let message = req.body['form-message'];
  let isSent = false;

  // email to send these messages to
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: creds
  });

  let adminEmail = {
    from: 'Mimi Kim <'+creds.user+'>',
    to: creds.user,
    subject: 'New Form Submission from ' + name,
    html: message + '<br>' + email
  };

  // send mail to myself
  transporter.sendMail( adminEmail, function(error, info) {
    if (error) {
      console.log(error);
      isSent = false;
    } else {
      isSent = true;
      console.log('Admin email sent: ' + info.response);
    }
  });

  // send copy to form submitter
  let userEmail = {
    from: 'Mimi Kim <'+creds.user+'>',
    to: email,
    subject: 'Thank you for your form submission!',
    html: 'Hello ' + name + ', thanks for your message. You will receive a reply soon.<br>Below is a copy of your message: <br>' + message
  };

  transporter.sendMail( userEmail, function(error, info) {
    if (error) {
      console.log(error);
      isSent = false;
    } else {
      isSent = true;
      console.log('User email sent: ' + info.response);
    }
  });


  setTimeout( function() {
    res.send( isSent );
  }, 600);
});

module.exports = router;
