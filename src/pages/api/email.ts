import type { NextApiRequest, NextApiResponse } from "next";

const MAILTRAP_API_TOKEN = process.env.MAILTRAP_API_TOKEN;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const message = {
        from: { email: process.env.NEXT_PUBLIC_SMTP_FROM_EMAIL, name: "Landing Page AKTIE" },
        to: [{ email: process.env.MAIL_TO }],
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
        const mailRes = await fetch(process.env.MAIL_TRAP_URL ?? "", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${MAILTRAP_API_TOKEN}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message),
        });

        if (!mailRes.ok) {
            throw new Error("Failed to send email");
        }

        res.status(200).end();
    } catch (error) {
        const errorMsg = "Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!😬";

        res.status(500).json({ errorMsg: errorMsg });
    }
}
