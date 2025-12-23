import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";
import ClebersImage from "../assets/images/cleberMascot.png";
import ClebersImageDark from "../assets/images/cleberMascotDark.png";
import ClebersImageMobile from "../assets/images/cleberMascotMobile.png";
import { isDarkTheme } from "../utils/util";

export default function Home() {
    const { theme } = useTheme();
    const [showCleberInfo, setShowCleberInfo] = useState(false);

    return (
        <div className="w-full h-default" id="home">
            <div className="h-40 sm:h-56 md:h-24" />
            <div className="w-full flex flex-col items-center md:flex-row md:h-default">
                <div className="w-full px-12 flex flex-col justify-center items-center md:px-0">
                    <h1 className="text-xl animate-fade-left md:whitespace-pre-wrap lg:text-2xl">
                        <span className="text-primary">
                            Tecnologia de ponta {""}
                        </span>
                        para sua empresa,{"\n"}
                        de sistemas complexos até seu primeiro {"\n"}
                        aplicativo, podemos te ajudar a agregar {"\n"}
                        cada vez mais {""}
                        <span className="text-secondary">
                            valor ao seu negócio.
                        </span>
                    </h1>
                    <div className="w-full h-36 flex justify-center items-center mt-2">
                        <span className="w-40 h-14 flex justify-center items-center mx-6 rounded-full
                                bg-linear-to-r from-primary via-red-500 to-secondary dark:border hover:border
                                hover:-translate-y-1 hover:border-purple-400 duration-100 ease-in animate-fade-up">
                            <a href="#contact" className="text-white font-medium sm:text-lg whitespace-nowrap">
                                Contate-nos
                            </a>
                        </span>
                        <button className="w-40 h-14 flex justify-center items-center border rounded-full
                                hover:-translate-y-1 hover:border-orange-400 duration-100 ease-in animate-fade-up ">
                            <a href="#solutions" className="font-medium sm:text-lg whitespace-nowrap">
                                Veja mais
                            </a>
                        </button>
                    </div>
                </div>
                <div className="w-3/5 md:w-1/2 flex flex-col justify-center items-center animate-fade-in mt-2 md:mt-0 md:mr-6 lg:w-3/4">
                    <div className="flex flex-col items-center">
                        {isDarkTheme(theme!) ?
                            <Image className="hidden rounded-full md:flex" priority src={ClebersImageDark} alt="Cleber - Mascote Capivara Cyberpunk da AKTIE TECH" width={500} height={520} />
                            :
                            <Image className="hidden rounded-full md:flex" priority src={ClebersImage} alt="Cleber - Mascote Capivara Cyberpunk da AKTIE TECH" width={500} height={520} />
                        }
                        <div className="hidden md:flex flex-col items-center text-center mt-6 px-4">
                            <button
                                onClick={() => setShowCleberInfo(!showCleberInfo)}
                                className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 
                                    hover:text-primary dark:hover:text-secondary transition-all duration-200 
                                    border border-gray-300 dark:border-gray-600 rounded-full px-4 py-2
                                    hover:border-primary dark:hover:border-secondary hover:shadow-md">
                                <span>🦫 Quem é o Cleber?</span>
                                <svg
                                    className={`w-4 h-4 transition-transform duration-200 ${showCleberInfo ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${showCleberInfo ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'
                                }`}>
                                <div className="text-sm md:text-base text-gray-700 dark:text-gray-300 max-w-md">
                                    Nosso mascote, uma <span className="font-semibold">capivara cyberpunk</span>, representa a união perfeita entre
                                    <span className="font-semibold text-primary dark:text-secondary"> tecnologia de ponta </span>
                                    e a tranquilidade característica do Oeste do Paraná.
                                    Ele está aqui para guiar você na sua transformação digital! 🚀
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="my-8 animate-fade-up md:hidden text-center">
                        <p className="text-lg font-medium">
                            Responsividade? Deixa conosco!📱
                        </p>
                        <div className="h-0.5 w-80 bg-primary/50 dark:bg-secondary rounded-full" />
                    </div>

                    <div className="flex flex-col items-center md:hidden">
                        <div className="w-60">
                            <Image className="rounded-full animate-fade-left" priority
                                src={ClebersImageMobile} alt="Cleber - Mascote Capivara Cyberpunk da AKTIE TECH" width={500} height={520} />
                        </div>
                        <div className="flex flex-col items-center text-center mt-6 px-6">
                            <button
                                onClick={() => setShowCleberInfo(!showCleberInfo)}
                                className="flex items-center gap-2 text-xs font-medium text-gray-600 dark:text-gray-400 
                                    hover:text-primary dark:hover:text-secondary transition-all duration-200 
                                    border border-gray-300 dark:border-gray-600 rounded-full px-3 py-1.5
                                    hover:border-primary dark:hover:border-secondary">
                                <span>🦫 Quem é o Cleber?</span>
                                <svg
                                    className={`w-3 h-3 transition-transform duration-200 ${showCleberInfo ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${showCleberInfo ? 'max-h-48 opacity-100 mt-3' : 'max-h-0 opacity-0'
                                }`}>
                                <div className="text-xs text-gray-700 dark:text-gray-300">
                                    Nosso mascote, uma <span className="font-semibold">capivara cyberpunk</span>, representa a união entre
                                    <span className="font-semibold text-primary dark:text-secondary"> tecnologia de ponta </span>
                                    e a tranquilidade do Oeste do Paraná. Ele vai te guiar na sua transformação digital! 🚀
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}