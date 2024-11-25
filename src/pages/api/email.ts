import sgMail from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from "next";

sgMail.setApiKey(process.env.SENDGRID_KEY ?? "");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const message = {
        from: process.env.SENDGRID_MAIL ?? "",
        to: process.env.NEXT_PUBLIC_SMTP_TO_EMAIL,
        subject: "Contato landing page AKTIE",
        text: req.body.email + req.body.message,
        html: `<h3>Contato formulário Landing Page</h3>
                </br>
                <h4>Nome: </h4><p>${req.body.name}</p>
                <h4>E-mail: </h4><p>${req.body.email}</p>
                <h4>Mensagem:</h4><p>${req.body.message}</p>
            `,
    };

    try {
        await sgMail.send(message);

        res.status(200).end();
    } catch (error) {
        const errorMsg = "Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!😬";

        res.status(500).json({ errorMsg: errorMsg });
    }
}
