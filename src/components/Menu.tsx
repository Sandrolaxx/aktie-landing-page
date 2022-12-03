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
                    <input
                        type="checkbox"
                        name="toggle"
                        id="toggle"
                        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="focus:ring-transparent toggle-checkbox absolute block w-7 h-7
                        rounded-full appearance-none cursor-pointer bg-red-200"
                    />
                    <label
                        htmlFor="toggle"
                        className="toggle-label block h-8 -ml-0.5 -mt-0.5 rounded-full bg-orange-100 cursor-pointer"
                    >
                        {theme === "dark" ?
                            <span className="absolute left-[23px] top-0.5">
                                <MoonIcon width={22} height={22} fill="#FF5F05" />
                            </span>
                            :
                            <span className="absolute left-0.5 top-[3px]">
                                <SunIcon width={22} height={22} fill="#FF5F05" stroke="#666666" />
                            </span>
                        }
                    </label>
                </div>
            </nav>
        </div>
    );
}