const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'forotheruse319@gmail.com',
        pass: 'forotheruse@123',
    }
});

const mailOptions = {
    from: 'forotheruse319@gmail.com',
    to: 'vchovatiya991@gmail.com',
    subject: 'email send success fully',
    text: ' thanks for send email'
};
const SendGmail = async () => {
    await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            return;
        } else {
            console.log('Email sent: ' + info.response);
        }
    })
}
module.exports = {
    SendGmail
}



