export interface LottieProps {
    animationFile: unknown;
    withActions?: boolean;
    actions?: {
        frames: [number] | [number, number];
        type: "seek" | "play" | "stop" | "loop";
        visibility?: [number, number];
        position?: { [axis in "x" | "y"]: number | [number, number] };
    };
}
