import Lottie from "lottie-react";
import appsAnimation from "../assets/lottie/apps.json";
import companyAnimation from "../assets/lottie/company.json";
import dataAnalysisAnimation from "../assets/lottie/dataAnalysis.json";
import LottieWithInteractivity from "../components/LottieWithInteractivity";

export default function Solutions() {
    return (
        <>
            <div className="w-full h-full flex flex-col items-center">
                <span className="w-3/4 h-24 pt-24 animate-fade-up">
                    <hr className="h-0.5 bg-primary dark:bg-secondary rounded-full" />
                </span>
                <div className="w-full h-full flex flex-col justify-center items-center 
                    lg:flex-row lg:justify-evenly">
                    <div className="w-full md:w-5/6 lg:w-1/2 flex justify-center items-center">
                        <Lottie animationData={appsAnimation} />
                    </div>
                    <p className="text-2xl px-20 text-center md:whitespace-pre-wrap 
                        lg:text-left lg:text-3xl lg:px-0">
                        Desenvolva agora mesmo um app {"\n"}
                        personalizado para sua solução.
                    </p>
                </div>
            </div>

            <div className="w-full h-full flex flex-col items-center">
                <span className="w-3/4 h-24 pt-24">
                    <hr className="h-0.5 bg-primary dark:bg-secondary rounded-full" />
                </span>
                <div className="w-full h-full flex flex-col justify-center items-center 
                    lg:flex-row lg:justify-evenly">
                    <p className="text-2xl px-20 text-center md:whitespace-pre-wrap 
                        mb-20 lg:text-left lg:text-3xl lg:px-0 lg:mb-0">
                        Automatize os processos e deixe{"\n"}
                        seus colaboradores livres para atuarem {"\n"}
                        em questões criativas e não operacionais.
                    </p>
                    <div className="w-full flex justify-center items-center md:w-3/4 lg:w-2/5">
                        <LottieWithInteractivity animationFile={companyAnimation}
                            actions={{
                                type: "seek",
                                visibility: [0, 1],
                                frames: [0, 160]
                            }} />
                    </div>
                </div>
            </div>

            <div className="w-full h-full flex flex-col items-center">
                <span className="w-3/4 h-24 pt-24">
                    <hr className="h-0.5 bg-primary dark:bg-secondary rounded-full" />
                </span>
                <div className="w-full h-full flex flex-col justify-center items-center 
                    lg:flex-row lg:justify-evenly">
                    <div className="w-full flex justify-center items-center md:w-3/4 lg:w-2/5">
                        <LottieWithInteractivity animationFile={dataAnalysisAnimation}
                            actions={{
                                type: "seek",
                                visibility: [0, 1],
                                frames: [0, 481]
                            }} />
                    </div>
                    <p className="text-2xl px-20 text-center md:whitespace-pre-wrap 
                        lg:text-left lg:text-3xl lg:px-0 lg:mb-0">
                        Utilize os dados ao seu favor! {"\n"}
                        Se torne uma empresa Data Driven e {"\n"}
                        esteja preparado para a Economia 4.0.
                    </p>
                </div>
            </div>

            <div className="h-full">

            </div>
        </>
    )
}