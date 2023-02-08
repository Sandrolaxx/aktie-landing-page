import { ApiError, EmailData } from "../utils/types";

export default async function sendContactMail(data: EmailData): Promise<void> {
    const request: RequestInit = {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
    };

    try {
        const response = await fetch("/api/email", request);

        if (response.ok) {
            return;
        }

        const error = await response.json();

        throw new Error(error.errorMsg);
    } catch (error: any) {
        throw new Error(error.message ?? "Erro ao realizar envio do e-mail.");
    }
}
