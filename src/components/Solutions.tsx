import Lottie from "lottie-react";
import appsAnimation from "../assets/lottie/apps.json";
import companyAnimation from "../assets/lottie/company.json";
import dataAnalysisAnimation from "../assets/lottie/dataAnalysis.json";
import LottieWithInteractivity from "../components/LottieWithInteractivity";

export default function Solutions() {
    return (
        <>
            <div id="solutions" className="w-full h-default mt-24 flex flex-col items-center sm:mt-0">
                <span className="w-3/4 h-24 pt-24 animate-fade-up">
                    <div className="h-0.5 w-full bg-primary/50 dark:bg-secondary rounded-full" />
                </span>
                <div className="w-full h-full flex flex-col items-center">
                    <p className="text-2xl pt-6 text-center md:whitespace-pre-wrap lg:text-left lg:text-2xl sm:pt-10">
                        Soluções
                    </p>
                    <div className="w-full h-full flex flex-col justify-center items-center lg:flex-row lg:justify-evenly">
                        <div className="w-full sm:-mt-28 md:w-5/6 lg:w-1/2">
                            <Lottie animationData={appsAnimation} />
                        </div>
                        <p className="text-base sm:text-xl px-16 text-center md:whitespace-pre-wrap 
                            lg:text-left lg:text-xl lg:px-0 lg:-mt-20 md:self-center">
                            Desenvolva agora mesmo um app {"\n"}
                            personalizado para sua solução.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full h-default flex flex-col items-center">
                <span className="w-3/4 h-24 pt-12 sm:pt-24">
                    <div className="h-0.5 w-full bg-primary/50 dark:bg-secondary rounded-full" />
                </span>
                <div className="w-full h-full flex flex-col justify-center items-center 
                    lg:flex-row lg:justify-evenly">
                    <p className="text-base sm:text-xl px-16 text-center md:whitespace-pre-wrap 
                        mb-20 lg:text-left lg:text-xl lg:px-0 lg:mb-0">
                        Automatize os processos e deixe seus{"\n"}
                        colaboradores livres para atuarem em{"\n"}
                        questões criativas e não operacionais.
                    </p>
                    <div className="w-full flex justify-center items-center md:w-3/4 lg:w-2/6">
                        <LottieWithInteractivity animationFile={companyAnimation}
                            actions={{
                                type: "seek",
                                visibility: [0, 1],
                                frames: [0, 160]
                            }} />
                    </div>
                </div>
            </div>

            <div className="w-full h-default flex flex-col items-center">
                <span className="w-3/4 h-24 pt-24">
                    <div className="h-0.5 w-full bg-primary/50 dark:bg-secondary rounded-full" />
                </span>
                <div className="w-full h-full flex flex-col justify-center items-center 
                    lg:flex-row lg:justify-evenly">
                    <div className="w-full flex justify-center items-center md:w-3/4 lg:w-2/6">
                        <LottieWithInteractivity animationFile={dataAnalysisAnimation}
                            actions={{
                                type: "seek",
                                visibility: [0, 1],
                                frames: [0, 481]
                            }} />
                    </div>
                    <p className="text-base sm:text-xl px-16 text-center md:whitespace-pre-wrap 
                        lg:text-left lg:text-xl lg:px-0 lg:mb-0">
                        Utilize os dados ao seu favor! {"\n"}
                        Se torne uma empresa Data Driven e {"\n"}
                        esteja preparado para a Economia 4.0.
                    </p>
                </div>
            </div>

        </>
    )
}