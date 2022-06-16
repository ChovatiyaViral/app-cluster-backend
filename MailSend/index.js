var nodemailer = require('nodemailer');

const sendMail = (data) => {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'wiyisi2643@exoacre.com',
            pass: '123'
        }
    });

    var mailOptions = {
        from: 'wiyisi2643@exoacre.com',
        to: 'myfriend@yahoo.com',
        subject: `${data.event_name} Created Success fuly`,
        text: ''
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })
}

module.exports = {
    sendMail
}



