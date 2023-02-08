import { Dispatch, LegacyRef, SetStateAction } from "react";
import ReCAPTCHA from "react-google-recaptcha";

//Interface's
export interface ILottieProps {
    animationFile: unknown;
    actions: {
        frames: [number] | [number, number];
        type: "seek" | "play" | "stop" | "loop";
        visibility?: [number, number];
        position?: { [axis in "x" | "y"]: number | [number, number] };
    };
}

export interface IMenuProps {
    showMobileMenu: boolean;
    setShowMobileMenu: Dispatch<SetStateAction<boolean>>;
}

export interface IReCaptchaProps {
    refCaptcha: LegacyRef<ReCAPTCHA>;
    onCompleteChallenge: (token: string | null) => void;
}

//Types's
export type EmailData = {
    name: string
    email: string
    message: string
}

export type ApiError = {
    errorMsg: string
}