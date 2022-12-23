import { useTheme } from "next-themes";
import MoonIcon from "../assets/icons/moon.svg";
import SunIcon from "../assets/icons/sun.svg";
import { isDarkTheme } from "../utils/util";

export default function ThemeTogle() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="relative w-10 top-12 right-0 lg:right-10">
            <div className="mb-3">
                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input type="checkbox" name="toggle" id="theme" onChange={() => setTheme(isDarkTheme(theme!) ? "light" : "dark")}
                        className={`${isDarkTheme(theme!) ? "bg-purple-500 right-0" : "bg-red-200 right-4"}
                                outline-none focus:outline-none duration-200 ease-in absolute block w-6 h-6 rounded-full
                                appearance-none cursor-pointer`} />
                    <label htmlFor="theme" className={`block h-6 overflow-hidden rounded-full cursor-pointer
                                ${isDarkTheme(theme!) ? "bg-purple-700" : "bg-orange-100"}`}>
                        {isDarkTheme(theme!) ?
                            <span className="absolute left-[20.1px] top-[2.5px] duration-200 ease-in">
                                <MoonIcon className="w-[18px] h-[18px] fill-primary" />
                            </span>
                            :
                            <span className="absolute left-[3px] top-[3px] duration-200 ease-in">
                                <SunIcon className="w-[18px] h-[18px] fill-primary stroke-slate-500" />
                            </span>
                        }
                    </label>
                </div>
            </div>
        </div>
    );
}