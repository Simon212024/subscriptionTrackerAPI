
import nodemailer from "nodemailer";
import { EMAIL_USER,EMAIL_PASSWORD } from "../config/env.js";

//console.log("EMAIL_USER:", process.env.EMAIL_USER);
//console.log("EMAIL_PASS:", process.env.EMAIL_PASSWORD);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendEmail = async (to, subject, text) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  });
};