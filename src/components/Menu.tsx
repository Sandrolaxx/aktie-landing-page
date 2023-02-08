import { useTheme } from "next-themes";
import AktieIcon from "../assets/icons/aktLogo.svg";
import AktieIconDark from "../assets/icons/aktLogoDark.svg";
import CloseIcon from "../assets/icons/close.svg";
import AktieLogo from "../assets/icons/logo.svg";
import MenuIcon from "../assets/icons/menu.svg";
import { IMenuProps } from "../utils/types";
import { isDarkTheme } from "../utils/util";
import ThemeTogle from "./ThemeTogle";

export default function Menu({ showMobileMenu, setShowMobileMenu }: IMenuProps) {
    const { theme } = useTheme();

    return (
        <>
            <div className={`w-full fixed z-10 h-28 justify-center items-center bg-white dark:bg-dark-mode md:h-32`}>
                <nav className="w-full h-32 flex justify-center">
                    <span className="w-1/6 hidden sm:flex items-center justify-center animate-fade-down lg:w-1/5">
                        <a href="#home" className="text-lg hover:text-xl font-medium hover:text-primary 
                            lg:text-xl lg:hover:text-2xl">
                            Home
                        </a>
                    </span>
                    <span className="w-1/6 hidden sm:flex items-center justify-center animate-fade-down lg:w-1/5">
                        <a href="#solutions" className="text-lg hover:text-xl font-medium hover:text-primary 
                            lg:text-xl lg:hover:text-2xl">
                            Soluções
                        </a>
                    </span>
                    <span className="w-full flex justify-center animate-fade-up mt-2 sm:ml-0 sm:w-1/6">
                        {isDarkTheme(theme!) ?
                            <AktieIconDark className="w-20 h-20 lg:w-24 lg:h-24" />
                            :
                            <AktieIcon className="w-20 h-20 lg:w-24 lg:h-24" />
                        }
                    </span>
                    <span className="w-1/6 hidden sm:flex items-center justify-center animate-fade-down lg:w-1/5">
                        <a href="#team" className="text-lg hover:text-xl font-medium hover:text-secondary 
                            lg:text-xl lg:hover:text-2xl">
                            Time
                        </a>
                    </span>
                    <span className="w-1/6 hidden sm:flex items-center justify-center animate-fade-down lg:w-1/5">
                        <a href="#contact" className="text-lg hover:text-xl font-medium hover:text-secondary 
                            lg:text-xl lg:hover:text-2xl">
                            Contato
                        </a>
                    </span>

                    <div className="hidden sm:flex animate-fade-right">
                        <ThemeTogle />
                    </div>
                </nav>
                {showMobileMenu ?
                    <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="absolute z-10 top-10 right-8">
                        <CloseIcon className="w-8 h-8 dark:stroke-primary sm:hidden" />
                    </button>
                    :
                    <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="absolute z-10 top-10 right-8">
                        <MenuIcon className="w-8 h-8 dark:stroke-primary sm:hidden" />
                    </button>
                }
            </div>
            {showMobileMenu &&
                <div className="flex w-full h-screen absolute inset-0 flex-col overflow-y-hidden bg-white dark:bg-neutral-900 sm:hidden">
                    <span className="w-full flex flex-col items-center mt-6 animate-fade-down">
                        <AktieLogo className="w-20 h-20" />
                        <span className="-mt-4">
                            <ThemeTogle />
                        </span>
                    </span>
                    <nav className="w-full h-3/4 flex flex-col justify-center animate-fade-in-fast">
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