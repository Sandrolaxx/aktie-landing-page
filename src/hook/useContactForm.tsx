import React, { useState } from "react";
import { EmailData } from "../utils/types";

export default function useContactForm() {
    const [formFields, setFormFields] = useState<EmailData>({
        name: "",
        email: "",
        message: "",
    });

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

    return { formFields, handleChange, resetFields };
};