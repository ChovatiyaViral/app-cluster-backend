const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    // service: "gmail",
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    // secure: false,
    auth: {
        user: process.env.NOTIFICATION_EMAIL,
        pass: process.env.NOTIFICATION_EMAIL_PASSWORD
    },
    // tls: {
    //     rejectUnauthorized: false
    // }
});

var mailOptions = {
    from: process.env.NOTIFICATION_EMAIL,
    to: process.env.SEND_EMAIL,
    subject: 'Subject',
    html: "Mail content here."
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

module.exports = {
    sendMail
}

