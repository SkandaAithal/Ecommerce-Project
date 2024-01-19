const nodemailer = require("nodemailer");
const path = require("path");
let transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "skandaaithal1@gmail.com",
    pass: "jtzbpqijawlwdtxx",
  },
});

let invitationMail = async (email, name) => {
  let sendmail = await transport.sendMail({
    from: "skandaaithal1@gmail.com",
    to: email,
    subject: "Invitation Mail",
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
    body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      background-color: #f4f4f4; /* Light gray background color */
      color: #333; /* Dark text color */
    }

    .container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      background-color: #fff; /* White container background */
      border: 2px solid #007BFF; /* Blue border */
    }

    h1 {
      color: #007BFF; /* Blue heading color */
    }

    p {
      font-size: 16px;
      line-height: 1.5;
      color: #555; /* Dark gray text color */
    }

    span {
      font-size: 1rem;
      text-transform: capitalize;
      color: #007BFF; /* Blue span color */
    }

    .bold-white {
      font-weight: bold;
      color: #fff; /* White color */
    }
  </style>
    </head>
    <body>
      <div class="container">
        <h1>Welcome to The UrbanPulse!</h1>
        <p><span style="font-size: 1.5rem; text-transform: capitalize;font-weight: bold;">Hi ${name}!</span></p>
        <p>You have been invited to join The UrbanPulse. We're excited to have you on board!</p>
        <p class="bold-white">Your account has been created <span >Succesfully</span>.</p>  
        <p>If you have any questions or need assistance, feel free to contact us.</p>
        <p>Thank you!</p>
      </div>
    </body>
    </html>
     `,
  });
};
let otpMail = async (email, name, otp) => {
  let sendmail = await transport.sendMail({
    from: "skandaaithal1@gmail.com",
    to: email,
    subject: "Login OTP",
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: 'Arial', sans-serif;
          margin: 0;
          background-color: #f4f4f4; /* Light gray background color */
          color: #333; /* Dark text color */
        }
    
        .container {
          max-width: 600px;
          margin: 20px auto;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          background-color: #fff; /* White container background */
          border: 2px solid #007BFF; /* Blue border */
        }
    
        h1 {
          color: #007BFF; /* Blue heading color */
        }
    
        p {
          font-size: 16px;
          line-height: 1.5;
          color: #555; /* Dark gray text color */
        }
    
        span {
          font-size: 1rem;
          text-transform: capitalize;
          color: #007BFF; /* Blue span color */
        }
    
        .otp-container {
          margin-top: 15px;
          
        padding: 10px 20px;
        letter-spacing:3px;
          background-color: #007BFF; 
          color: #fff; 
          font-size: 24px;
          font-weight: bold;
          border-radius: 12px;
          display: inline-block; 
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Soft shadow */
        }
    
        .bold-white {
          font-weight: bold;
          color: #fff; /* White color */
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Login OTP</h1>
        <p><span style="font-size: 1.5rem; text-transform: capitalize;font-weight: bold;">Hi ${name}!</span></p>
        <p class="bold-white">Your OTP is:</p>
        <p class="otp-container" >${otp}</p>
        <p><span class="bold-white">This OTP is valid for 60 seconds.</span> Please use it to complete your login.</p>
        <p >
          If you didn't request this OTP or have any questions, please contact us.
        </p>
      </div>
    </body>
    </html>
    `,
  });
};

module.exports = { invitationMail, otpMail };
