const nodemailer = require('nodemailer')
const { EMAIL } = require('../config/library.config')

const transporter = nodemailer.createTransport({
    host: EMAIL.HOST,
    port: EMAIL.PORT,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: EMAIL.MAIL,
        pass: EMAIL.PASSWORD,
    },
});

// async..await is not allowed in global scope, must use a wrapper
const sendMail = async (data) => {
    try {
        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: data.from, //'"Maddison " <maddison53@ethereal.email>', 
            to: data.to, //"bar@example.com, baz@example.com",
            subject: data.subject, //"Hello ✔", 
            text: data.text, //"Hello world?", 
            html: data.html //"<b>Hello world?</b>",
        });
        return info.messageId;
    } catch (error) {
        console.log(error)
    }
}

module.exports = {sendMail}
