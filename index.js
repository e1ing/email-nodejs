const nodemailer = require("nodemailer");
const express = require('express')
const app = express()
const cors = require("cors")
const bodyParser = require('body-parser')
const port = 3010

app.use (cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

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


app.post('/sendMessage',async (req, res) => {
    let {message, contacts, name} = req.body;

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: "'HR wants me' <eling.prog@gmail.com>",
        to: "elvira.kisling@gmail.com",
        subject: "Hello ✔",
        text: "Hello test?",
        html: `<b>Сообщение с portfolio</b>
        <div>${name}</div>
        <div>${email}</div>
        <div>${message}</div>`
    });
    res.send(res.body);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})