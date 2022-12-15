import { useTheme } from "next-themes";
import Image from "next/image";
import ClebersImage from "../assets/images/cleberMascot.png";
import ClebersImageDark from "../assets/images/cleberMascotDark.png";
import ClebersImageMobile from "../assets/images/cleberMascotMobile.png";
import { isDarkTheme } from "../utils/util";

export default function Home() {
    const { theme } = useTheme();

    return (
        <div className="w-full flex flex-col items-center md:flex-row md:h-3/4">
            <div className="w-full px-20 flex flex-col justify-center items-center md:px-0">
                <p className="text-2xl animate-fade-left md:whitespace-pre-wrap lg:text-3xl">
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
                <div className="w-full h-36 flex items-center justify-center mt-2">
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
            <div className="w-1/2 flex flex-col justify-center items-center animate-fade-in mt-2 md:mt-0 md:mr-6 lg:w-3/4">
                {isDarkTheme(theme!) ?
                    <Image className="hidden rounded-full md:flex" priority src={ClebersImageDark} alt="Cleber Mascot Dark" width={500} height={520} />
                    :
                    <Image className="hidden rounded-full md:flex" priority src={ClebersImage} alt="Cleber Mascot" width={500} height={520} />
                }
                <div className="my-8 animate-fade-up md:hidden text-center">
                    <p className="text-lg font-medium">
                        Responsividade? Deixa conosco!📱
                    </p>
                    <hr className="w-96 h-0.5 bg-primary dark:bg-secondary" />
                </div>
                <Image className="rounded-full md:hidden animate-fade-left" priority
                    src={ClebersImageMobile} alt="Cleber Mascot Responsive" width={500} height={520} />
            </div>
        </div>
    );
}