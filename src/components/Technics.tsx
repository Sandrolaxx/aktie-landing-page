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
            <div className="w-full flex flex-col justify-center items-center">
                <h2 className="text-xl py-6 text-center md:whitespace-pre-wrap lg:text-left lg:text-2xl sm:pt-10">
                    Tecnologias Modernas de Desenvolvimento
                </h2>
                <div className="w-full px-6 grid grid-cols-3 gap-12 place-items-center md:grid-cols-4 lg:w-5/6 lg:grid-cols-7">
                    <span title="Java" className="h-24 w-24 flex justify-center items-center 
                        hover:rounded-lg hover:bg-orange-100">
                        <Image priority src={Java} alt="Java" width={100} />
                    </span>
                    <span title="TypeScript" className="h-24 w-24 flex justify-center items-center 
                        hover:rounded-lg hover:bg-cyan-100">
                        <Image priority src={TypeScript} alt="TypeScript" width={75} />
                    </span>
                    <span title="Python" className="h-24 w-24 flex justify-center items-center 
                        hover:rounded-lg hover:bg-yellow-100">
                        <Image priority src={Python} alt="Python" width={85} />
                    </span>
                    <span title="Quarkus" className="h-24 w-24 flex justify-center items-center 
                        hover:rounded-lg hover:bg-red-100">
                        <Image priority src={Quarkus} alt="Quarkus" width={65} />
                    </span>
                    <span title="Next.js" className="h-24 w-24 flex justify-center items-center 
                        hover:rounded-lg hover:bg-gray-100">
                        <Image priority src={Next} alt="Next.js" width={65} />
                    </span>
                    <span title="Tailwind" className="h-24 w-24 flex justify-center items-center 
                        hover:rounded-lg hover:bg-emerald-50">
                        <Image priority src={Tailwind} alt="Tailwind" width={80} />
                    </span>
                    <span title="ReactNative" className="h-24 w-24 flex justify-center items-center 
                        hover:rounded-lg hover:bg-sky-50">
                        <Image priority src={ReactNative} alt="ReactNative" width={80} />
                    </span>
                </div>
            </div>
        </div >
    )
}