const nodemailer = require("nodemailer");
const express = require('express')
const app = express()
const port = 3010

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    port: 25,
    tls: {
        rejectUnauthorized: false
    },
    auth: {
        user: "eling.prog@gmail.com", // generated ethereal user
        pass: "eling01091993", // generated ethereal password
    },
});


app.get('/sendMessage',async (res) => {
    console.log("test")
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: "'Elya message' <eling.prog@gmail.com>", // sender address
        to: "elvira.kisling@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello test?", // plain text body*/
        // html: "<b>Hello test?</b>", // html body
    });
    res.send('ddd');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})