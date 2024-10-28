// pages/api/sendForm.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type FormData = {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, phone, course, message } = req.body as FormData;

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Configure the email details
    const mailOptions = {
      from: process.env.EMAIL_USER,            // Your email address (sender)
      to: process.env.EMAIL_USER,               // Your email address (receiver)
      subject: 'New Form Submission from Academix', 
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Course: ${course}
        Message: ${message}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error sending email', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
