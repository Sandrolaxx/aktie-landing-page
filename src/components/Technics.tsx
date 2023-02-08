import Image from "next/image";
import Java from "../assets/images/technologies/java.png";
import TypeScript from "../assets/images/technologies/ts.png";
import Python from "../assets/images/technologies/python.png";
import Quarkus from "../assets/images/technologies/quarkus.png";
import Next from "../assets/images/technologies/next.png";
import Tailwind from "../assets/images/technologies/tailwind.png";
import ReactNative from "../assets/images/technologies/react-native.png";

export default function Technics() {
    return (
        <div className="w-full h-min flex flex-col items-center sm:mb-0">
            <div className="w-full h-full flex flex-col justify-center items-center">
                <p className="text-xl py-6 text-center md:whitespace-pre-wrap lg:text-left lg:text-2xl sm:pt-10">
                    Tecnologias
                </p>
                <div className="w-full px-6 grid grid-cols-3 gap-12 place-items-center md:gap-6 md:grid-cols-4 lg:grid-cols-7">
                    <Image className="" priority src={Java} alt="Java" width={100} height={100} />
                    <Image className="" priority src={TypeScript} alt="TypeScript" width={100} height={100} />
                    <Image className="" priority src={Python} alt="Python" width={100} height={100} />
                    <Image className="" priority src={Quarkus} alt="Quarkus" width={100} height={100} />
                    <Image className="" priority src={Next} alt="Next" width={100} height={100} />
                    <Image className="" priority src={Tailwind} alt="Tailwind" width={100} height={100} />
                    <Image className="" priority src={ReactNative} alt="ReactNative" width={100} height={100} />
                </div>
            </div>
        </div >
    )
}