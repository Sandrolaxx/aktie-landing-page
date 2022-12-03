import AktieIcon from "../assets/icons/aktLogo.svg";
import AktieIconDark from "../assets/icons/aktLogoDark.svg";
import MoonIcon from "../assets/icons/moon.svg";
import SunIcon from "../assets/icons/sun.svg";
import { useTheme } from "next-themes";

export default function Menu() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="w-full h-32 flex justify-center items-center">
            <nav className="w-full flex justify-center">
                <span className="flex items-center justify-center w-1/5">
                    <a href="" className="text-xl font-medium hover:text-primary hover:text-2xl">
                        Home
                    </a>
                </span>
                <span className="flex items-center justify-center w-1/5">
                    <a href="" className="text-xl font-medium hover:text-primary hover:text-2xl">
                        Soluções
                    </a>
                </span>
                <span className="w-1/6 flex justify-center">
                    {theme === "dark" ?
                        <AktieIconDark width={112} height={112} />
                        :
                        <AktieIcon width={112} height={112} />
                    }
                </span>
                <span className="flex items-center justify-center w-1/5">
                    <a href="" className="text-xl font-medium hover:text-secondary hover:text-2xl">
                        Time
                    </a>
                </span>
                <span className="flex items-center justify-center w-1/5">
                    <a href="" className="text-xl font-medium hover:text-secondary hover:text-2xl">
                        Contato
                    </a>
                </span>

                <div className="relative inline-block w-12 right-14 top-12 align-middle select-none">
                    <div className="mb-3">
                        <div className="relative inline-block w-10 mr-2 align-middle select-none">
                            <input type="checkbox" name="toggle" id="theme" onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="checked:bg-purple-500 outline-none focus:outline-none right-4 checked:right-0
                                duration-200 ease-in absolute block w-6 h-6 rounded-full bg-red-200 appearance-none cursor-pointer" />
                            <label htmlFor="theme" className={`block h-6 overflow-hidden rounded-full cursor-pointer
                                ${theme === "dark" ? "bg-purple-700" : "bg-orange-100"}`}>
                                {theme === "dark" ?
                                    <span className="absolute left-[20.1px] top-[2.5px] duration-200 ease-in">
                                        <MoonIcon width={18} height={18} fill="#FF5F05" />
                                    </span>
                                    :
                                    <span className="absolute left-[3px] top-[3px] duration-200 ease-in">
                                        <SunIcon width={18} height={18} fill="#FF5F05" stroke="#666666" />
                                    </span>
                                }
                            </label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}