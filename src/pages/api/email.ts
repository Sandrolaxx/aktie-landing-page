import type { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const message = {
        from: process.env.NEXT_PUBLIC_SMTP_EMAIL,
        to: req.body.email,
        subject: "informação",
        text: req.body.message,
        html: `<p>${req.body.message}</p>`,
    };

    const transporter = nodemailer.createTransport({
        host: process.env.NEXT_PUBLIC_SMTP_HOST,
        port: 587,
        secure: false,
        auth: {
            user: process.env.NEXT_PUBLIC_SMTP_EMAIL,
            pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
        },
    });

    try {
        await transporter.sendMail(message);

        res.status(200).end();
    } catch (error) {
        const errorMsg = "Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!😬";

        res.status(500).json({errorMsg: errorMsg});
    }
}
