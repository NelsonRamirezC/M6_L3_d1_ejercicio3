require('dotenv').config()

const nodemailer = require("nodemailer");

const sendMail = (mail, asunto, mensaje) => {

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.CORREO, 
          pass: process.env.PASSWORD,
        },
        tls: {
            rejectUnauthorized: false,
          },
      });
    
      const mailOptions = {
        from: 'correpruebanodejs@gmail.com',
        to: mail,
        subject: asunto,
        text: mensaje
      };
    
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
       console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

}


sendMail('nelson.ramirez.candia@gmail.com', 'Este es un nuevo correo electronico', 'Mensaje de prueba.')