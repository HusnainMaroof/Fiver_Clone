

import nodemailer from "nodemailer"


export const sendOTP = (email, otp) => {




    let emailSender = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })


    let mailOption = {
        from: "husnainmaroof95@gmail.com",
        to: email,
        subject: "OTP Verification",
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>OTP Verification</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f5f5f5;
      margin: 0;
      padding: 0;
    }

    .container {
      background-color: #ffffff;
      max-width: 100%;
      margin: 50px auto;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      overflow: hidden;
    }

    .header {
      background: linear-gradient(90deg, #1dbf73, #0e9f6e);
      padding: 20px;
      text-align: center;
      color: white;
    }

    .header h1 {
      margin: 0;
      font-size: 22px;
    }

    .content {
      padding: 30px 20px;
      text-align: center;
    }

    .content h2 {
      font-size: 20px;
      margin-bottom: 15px;
      color: #333;
    }

    .content p {
      color: #555;
      font-size: 15px;
      margin-bottom: 25px;
    }

    .otp-box {
      display: inline-block;
      background-color: #e8f5ee;
      border: 2px solid #1dbf73;
      border-radius: 8px;
      padding: 15px 25px;
      font-size: 24px;
      font-weight: bold;
      letter-spacing: 3px;
      color: #1dbf73;
    }

    .footer {
      font-size: 13px;
      color: #999;
      text-align: center;
      padding: 15px;
    }

    .footer a {
      color: #1dbf73;
      text-decoration: none;
      margin: 0 5px;
    }
  </style>
</head>
<body>

  <div class="container">
    <div class="header">
      <h1>OTP Verification</h1>
    </div>

    <div class="content">
      <h2>Verify Your Account</h2>
      <p>Thank you for joining us! Use the One-Time Password (OTP) below to verify your account. This code is valid for the next 10 minutes.</p>
      <div class="otp-box" id="otp"> ${otp} </div>
      <p style="margin-top: 25px; font-size: 13px; color: #888;">If you didn’t request this OTP, please ignore this email or contact our support team.</p>
    </div>

    <div class="footer">
      © 2025 Your Company Name. All rights reserved. |
      <a href="#">Privacy Policy</a> |
      <a href="#">Contact Us</a>
    </div>
  </div>

</body>
</html>
`
    }


    emailSender.sendMail(mailOption, (error, info) => {

        if (error) {
            console.log(error);

        } else {
            console.log("Mail Sended Successfuly");

        }
    })



}