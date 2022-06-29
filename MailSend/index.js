const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
        user: process.env.NOTIFICATION_EMAIL,
        pass: process.env.NOTIFICATION_EMAIL_PASSWORD
    },
});

var mailOptions = {
    from: process.env.NOTIFICATION_EMAIL,
    to: process.env.SEND_EMAIL,
    subject: 'Welcome to my word',
    text: "you are the hack now.  are you student now "
};

async function sendMail(ToAddresses, CcAddresses, Subject, mailContent) {
    console.log("ToAddresses, CcAddresses, Subject, mailContent", ToAddresses, CcAddresses, Subject, mailContent);
    await transporter.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + response);
        }
    })
}

// Go to your Google account at https://myaccount.google.com/
// Go to Security
// In "Signing in to Google" section choose 2-Step Verification - here you have to verify yourself, in my case it was with phone number and a confirmation code send as text message. After that you will be able to enabled 2-Step Verification
// Back to Security in "Signing in to Google" section choose App passwords
// From the Select app drop down choose Other (Custom name) and put a name e.g. nodemailer
// A modal dialog will appear with the password. Get that password and use it in your code.

module.exports = {
    sendMail
}

