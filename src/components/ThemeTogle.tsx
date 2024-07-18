import { useTheme } from "next-themes";
import MoonIcon from "../assets/icons/moon.svg";
import SunIcon from "../assets/icons/sun.svg";
import { isDarkTheme } from "../utils/util";

export default function ThemeTogle() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="w-10">
            <div className="relative inline-block w-9 align-middle select-none">
                <input type="checkbox" name="toggle" id="theme" onChange={() => setTheme(isDarkTheme(theme!) ? "light" : "dark")}
                    className={`${isDarkTheme(theme!) ? "bg-purple-500 right-0" : "bg-red-200 left-0"}
                                outline-none focus:outline-none duration-200 ease-in absolute block w-5 h-5 rounded-full
                                appearance-none cursor-pointer`} />
                <label htmlFor="theme" className={`block h-5 overflow-hidden rounded-full cursor-pointer
                                ${isDarkTheme(theme!) ? "bg-purple-700" : "bg-orange-100"}`}>
                    {isDarkTheme(theme!) ?
                        <span className="absolute left-[19px] top-[1.5px] duration-200 ease-in">
                            <MoonIcon className="w-[16px] h-[16px] fill-primary" />
                        </span>
                        :
                        <span className="absolute left-0.5 top-[2.8px] duration-200 ease-in">
                            <SunIcon className="w-[15px] h-[15px] fill-primary stroke-slate-500" />
                        </span>
                    }
                </label>
            </div>
        </div>
    );
}