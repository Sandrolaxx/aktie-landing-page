import { useLottie, useLottieInteractivity } from "lottie-react";
import { ILottieProps } from "../utils/types";

export default function LottieWithInteractivity(props: ILottieProps) {
    const lottieObj = useLottie({ animationData: props.animationFile });

    const lottieAnimated = useLottieInteractivity({
        mode: "scroll",
        actions: [props.actions!],
        lottieObj
    });

    return lottieAnimated;
}