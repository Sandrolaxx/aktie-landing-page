import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import AktieIcon from "../assets/icons/aktLogo.svg";
import AktieIconDark from "../assets/icons/aktLogoDark.svg";
import CloseIcon from "../assets/icons/close.svg";
import MenuIcon from "../assets/icons/menu.svg";
import { IMenuProps } from "../utils/types";
import { isDarkTheme } from "../utils/util";
import ThemeTogle from "./ThemeTogle";

export default function Menu({ showMobileMenu, setShowMobileMenu }: IMenuProps) {
    const { theme } = useTheme();
    const [small, setSmall] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setSmall(window.pageYOffset > 80)
            );
        }
    }, []);

    return (
        <>
            <div className={`w-full fixed z-10 h-20 justify-center items-center bg-white dark:bg-dark-mode md:h-32
                ${small && 'md:h-20 pt-1 backdrop-blur-sm bg-white/30 dark:bg-dark-mode/50'}`}>
                <nav className="w-full h-full flex justify-center">
                    <span className="w-1/6 hidden sm:flex items-center justify-center animate-fade-down">
                        <a href="#home" className={`group text-center text-lg hover:text-xl font-medium
                                hover:text-primary lg:text-xl ${small && 'text-md lg:text-lg'}`}>
                            Home
                            <hr className="hidden group-hover:flex w-24 h-0.5 bg-primary 
                                    dark:bg-primary animate-fade-down" />
                        </a>
                    </span>
                    <span className="w-1/6 hidden sm:flex items-center justify-center animate-fade-down">
                        <a href="#solutions" className={`group text-center text-lg hover:text-xl font-medium
                                hover:text-primary lg:text-xl ${small && 'text-md lg:text-lg'}`}>
                            Soluções
                            <hr className="hidden group-hover:flex w-24 h-0.5 bg-primary 
                                    dark:bg-primary animate-fade-down" />
                        </a>
                    </span>
                    <span className="w-full flex justify-center animate-fade-up mt-2 sm:ml-0 sm:w-1/6">
                        {isDarkTheme(theme!) ?
                            <AktieIconDark className={`w-20 h-14 lg:w-24 lg:h-24 ${small && 'h-10 w-10 lg:w-14 lg:h-12'}`} />
                            :
                            <AktieIcon className={`w-20 h-14 lg:w-24 lg:h-24 ${small && 'h-10 w-10 lg:w-14 lg:h-12'}`} />
                        }
                    </span>
                    <span className="w-1/6 hidden sm:flex items-center justify-center animate-fade-down">
                        <a href="#team" className={`group text-center text-lg hover:text-xl font-medium
                                hover:text-secondary lg:text-xl ${small && 'text-md lg:text-lg'}`}>
                            Time
                            <hr className="hidden group-hover:flex w-24 h-0.5 bg-secondary 
                                    dark:bg-secondary animate-fade-down" />
                        </a>
                    </span>

                    <span className="w-1/6 hidden sm:flex items-center justify-center animate-fade-down">
                        <a href="#contact" className={`group text-center text-lg hover:text-xl font-medium
                                hover:text-secondary lg:text-xl ${small && 'text-md lg:text-lg'}`}>
                            Contato
                            <hr className="hidden group-hover:flex w-24 h-0.5 bg-secondary 
                                    dark:bg-secondary animate-fade-down" />
                        </a>
                    </span>

                    <div className={`hidden sm:flex items-center animate-fade-down relative left-12`}>
                        <ThemeTogle />
                    </div>
                </nav>
                {showMobileMenu ?
                    <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="absolute z-10 top-7 right-8">
                        <CloseIcon className="w-7 h-7 dark:stroke-primary sm:hidden" />
                    </button>
                    :
                    <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="absolute z-10 top-7 right-8">
                        <MenuIcon className="w-7 h-7 dark:stroke-primary sm:hidden" />
                    </button>
                }
            </div>
            {showMobileMenu &&
                <div className="flex w-full h-screen absolute inset-0 flex-col overflow-y-hidden bg-white dark:bg-neutral-900 sm:hidden">
                    <span className="w-full flex flex-col items-center mt-6 animate-fade-down">
                        <span className="h-20" />
                        <ThemeTogle />
                    </span>
                    <nav className="w-full h-2/3 flex flex-col justify-center animate-fade-in-fast">
                        <button className={`flex flex-col w-full h-20 justify-center items-center`}>
                            <a href="#home" onClick={() => setShowMobileMenu(false)} className="group text-lg hover:text-xl font-medium
                                hover:text-primary lg:text-xl lg:hover:text-2xl">
                                Home
                                <hr className="hidden group-hover:flex w-32 h-0.5 bg-primary 
                                    dark:bg-primary animate-fade-up" />
                            </a>
                        </button>
                        <button className={`flex w-full h-20 justify-center items-center`}>
                            <a href="#solutions" onClick={() => setShowMobileMenu(false)} className="group text-lg hover:text-xl font-medium
                                hover:text-primary lg:text-xl lg:hover:text-2xl">
                                Soluções
                                <hr className="hidden group-hover:flex w-32 h-0.5 bg-primary 
                                    dark:bg-primary animate-fade-up" />
                            </a>
                        </button>
                        <button className={`flex w-full h-20 justify-center items-center`}>
                            <a href="#team" onClick={() => setShowMobileMenu(false)} className="group text-lg hover:text-xl font-medium
                                hover:text-secondary lg:text-xl lg:hover:text-2xl">
                                Time
                                <hr className="hidden group-hover:flex w-32 h-0.5 bg-secondary 
                                    dark:bg-secondary animate-fade-up" />
                            </a>
                        </button>
                        <button className={`flex w-full h-20 justify-center items-center`}>
                            <a href="#contact" onClick={() => setShowMobileMenu(false)} className="group text-lg hover:text-xl font-medium
                                hover:text-secondary lg:text-xl lg:hover:text-2xl">
                                Contato
                                <hr className="hidden group-hover:flex w-32 h-0.5 bg-secondary 
                                    dark:bg-secondary animate-fade-up" />
                            </a>
                        </button>
                    </nav>
                    <footer className="absolute bottom-6 w-full flex justify-center animate-fade-up">
                        Powered by AKTIE TECH
                    </footer>
                </div>
            }
        </>
    );
}