// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const nodemailer = require('nodemailer')

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const message = {
    from: req.body.email,
    to: process.env.GMAIL_EMAIL_ANDRESS,
    subject: 'informação',
    text: req.body.message,
    html: `<p>${req.body.message}</p>`,
  }

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_EMAIL_ADDRESS,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail(message)
  console.log(message)
  console.log(transporter)

  //res.status(200).json({ name: 'John Doe' })
}
