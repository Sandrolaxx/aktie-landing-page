import { useTheme } from "next-themes";
import Image from "next/image";
import ClebersImage from "../assets/images/cleberMascot.png";
import ClebersImageDark from "../assets/images/cleberMascotDark.png";
import { isDarkTheme } from "../utils/util";

export default function Home() {
    const { theme } = useTheme();

    return (
        <div className="w-full h-3/4 flex justify-center">
            <div className="w-1/2 flex flex-col justify-center items-center">
                <p className="text-3xl whitespace-pre-wrap animate-fade-left">
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
                </p>
                <div className="w-full h-36 flex items-center justify-center">
                    <button className="w-40 h-14 mx-6 text-white font-medium text-lg border rounded-full
                                bg-gradient-to-r from-primary via-red-500 to-secondary animate-gradient-x
                                hover:-translate-y-1 hover:border-purple-400 duration-100 ease-in animate-fade-up">
                        Contate-nos
                    </button>
                    <button className="w-40 h-14 font-medium text-lg border rounded-full
                                hover:-translate-y-1 hover:border-orange-400 duration-100 ease-in animate-fade-up">
                        Veja mais
                    </button>
                </div>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center animate-fade-right">
                {isDarkTheme(theme!) ?
                    <Image className="rounded-full" priority src={ClebersImageDark} alt="Cleber Mascot Dark" width={600} height={600} />
                    :
                    <Image className="rounded-full" priority src={ClebersImage} alt="Cleber Mascot" width={600} height={600} />
                }
            </div>
        </div>
    );
}