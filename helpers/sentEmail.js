const nodemailer = require("nodemailer");

async function sentEmail(email, subject, template) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sagorkhan.cit@gmail.com",
      pass: "gwuitygnyecgsqxr",
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"OREBI 👻" <sagorkhan.cit>', // sender address
    to: email, // list of receivers
    subject: subject,
    // subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: template, // html body
  });
}

module.exports = sentEmail;
