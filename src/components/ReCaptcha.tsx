import ReCAPTCHA from "react-google-recaptcha";
import { IReCaptchaProps } from "../utils/types";

export default function ReCaptcha({ onCompleteChallenge, refCaptcha }: IReCaptchaProps) {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;

    return (
        // @ts-ignore
        <ReCAPTCHA ref={refCaptcha} sitekey={siteKey} onChange={onCompleteChallenge} />
    );
}