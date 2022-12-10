import { useLottie, useLottieInteractivity } from "lottie-react";
import { LottieProps } from "../utils/types";

export default function LottieElement(props: LottieProps) {
    const lottieObj = useLottie({animationData: props.animationFile});

    if (props.withActions) {
        const lottieAnimated = useLottieInteractivity({
            mode: "scroll",
            actions: [props.actions!],
            lottieObj
        });
        
        return lottieAnimated;
    }

    const { View } = lottieObj;

    return View;
}