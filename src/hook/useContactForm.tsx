import React, { FormEvent, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import sendContactMail from "../service/sendEmail";
import { EmailData } from "../utils/types";
import { getToastError, getToastSuccess, isNullOrEmpty } from "../utils/util";

export default function useContactForm() {
    const [isChallengeCompleted, setChallengeCompleted] = useState(false);
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [formFields, setFormFields] = useState<EmailData>({
        name: "",
        email: "",
        message: "",
    });

    function isValidForm() {
        const isValidFields = !isNullOrEmpty(formFields.name)
            && !isNullOrEmpty(formFields.email)
            && (!isNullOrEmpty(formFields.message) && formFields.message.length > 6);

        return isValidFields && isChallengeCompleted;
    }

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        setFormFields(prevState => {
            return {
                ...prevState,
                [e.target.id]: e.target.value,
            };
        });
    };

    function resetFields() {
        setFormFields({
            name: "",
            email: "",
            message: "",
        });
    }

    function handleCompleteChallenge(token: string | null) {
        if (!token) {
            setChallengeCompleted(false);
            return;
        }

        setChallengeCompleted(true);
    }

    async function handeleSubmit(e: FormEvent) {
        e.preventDefault();

        if (!isValidForm()) {
            return;
        }

        setChallengeCompleted(false);

        await handleSendEmail();

        resetFields();
        recaptchaRef.current?.reset();
    }

    async function handleSendEmail() {
        const toastify = toast.loading("Enviando e-mail...📨");

        try {
            await sendContactMail(formFields);

            toast.update(toastify, getToastSuccess("Mensagem enviada com sucesso!✨"))
        } catch (error: any) {
            toast.update(toastify, getToastError(error.message));
        }
    }


    return { formFields, handleChange, handleCompleteChallenge, handeleSubmit, isValidForm, recaptchaRef };
};