const nodemailer = require("nodemailer");

async function sentEmail(email, subject) {
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
    html: `<!DOCTYPE html><html lang="en"><head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Email Verification</title> <style> body { font-family: 'Arial', sans-serif; margin: 0; padding: 0; text-align: center; } .container { max-width: 600px; margin: 20px auto; background: rgb(235,0,41);background: linear-gradient(128deg, rgba(235,0,41,1) 0%, rgba(64,64,64,1) 49%, rgba(106,106,106,1) 97%, rgba(0,0,0,1) 100%); } .header { color: #fff; padding: 20px; border-top-right-radius: 20px; border-top-left-radius: 20px; } .banner { color: #fff; padding: 20px; } .verification { padding: 30px; } .footer { color: #fff; padding: 20px; } .button { display: inline-block; padding: 15px 30px; font-size: 18px; text-align: center; text-decoration: none; background-color: rgba(235,0,41,.3); color: #fff; border-radius: 5px; transition: background 0.3s ease; } .button:hover { background-color: rgb(75, 58, 58); } a { color: #3498db; text-decoration: none; } </style></head><body> <div class="container"> <div class="header"> <h1>OREBI SHOPPING</h1> </div> <div class="banner"> <img src="company-logo.png" alt="Company Logo" width="50"> <h1>Thanks for signing up!</h1> <p>Please verify your email address.</p> </div> <div class="verification"> <h2>Hello Zahir 😒</h2> <p>We're excited to have you on board! To complete your sign-up, please click the button below to verify your email:</p> <p><a href="" class="button">Verify Your Email</a></p> <p>If you have any questions or concerns, feel free to <a href="mailto:zahirit@gmail.com">contact us</a>.</p> <p>Best regards,<br>Zahirul It<br>Creative It</p> </div> <div class="footer"> <p>&copy; 2024 OREBI. All rights reserved.</p> <p>Follow us on social media: <a href="#" target="_blank">Facebook</a> | <a href="#" target="_blank">Twitter</a> | <a href="#" target="_blank">Instagram</a></p> <p>Contact us: <a href="mailto:zahirit@gmail.com">zahirit@gmail.com</a> | Phone: +123 456 789</p> </div> </div></body></html>`, // html body
  });
}

module.exports = sentEmail;
