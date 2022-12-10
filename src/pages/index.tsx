import Head from "next/head";
import { useEffect, useState } from "react";
import appsAnimation from "../assets/lottie/apps.json";
import companyAnimation from "../assets/lottie/company.json";
import Home from "../components/Home";
import LottieElement from "../components/LottieElement";
import Menu from "../components/Menu";

export default function Main() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="h-screen">
            <Head>
                <title>AKTIE TECH - Tecnologia de ponta para seu negócio</title>
                <meta name="description" content="Desenvolvimento de sites, sistemas e aplicativos sob demanda." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="h-full">
                <Menu />
                <Home />

                <div className="w-full h-full flex flex-col items-center">
                    <span className="w-3/4 h-24 pt-24 animate-fade-up">
                        <hr className="h-0.5 bg-primary dark:bg-secondary rounded-full" />
                    </span>
                    <div className="w-full h-full flex justify-center items-center">
                        <div className="mt-10 animate-fade-in">
                            <LottieElement animationFile={appsAnimation} />
                        </div>
                        <span className="">
                            <p className="text-2xl md:whitespace-pre-wrap lg:text-3xl">
                                Desenvolva agora mesmo {"\n"}
                                o aplicativo para sua solução.
                            </p>
                        </span>
                    </div>
                </div>

                <div className="w-full h-full flex flex-col items-center">
                    <span className="w-3/4 h-24 pt-24">
                        <hr className="h-0.5 bg-primary dark:bg-secondary rounded-full" />
                    </span>
                    <div className="w-full h-full flex justify-center items-center">
                        <span className="">
                            <p className="text-2xl md:whitespace-pre-wrap lg:text-3xl">
                                Automatize os precessos e deixe{"\n"}
                                seus colaboradores livres para atuarem {"\n"}
                                em questões criativas e não operacionais.
                            </p>
                        </span>
                        <div className="w-2/6 h-3/4">
                            <LottieElement animationFile={companyAnimation}
                                withActions actions={{
                                    type: "seek",
                                    frames: [0, 200],
                                    visibility: [0, 1],
                                }} />
                        </div>
                    </div>
                </div>

                <footer className="h-14 bottom-14 flex justify-center pt-4">
                    Powered by AKTIE TECH
                </footer>
            </main>
        </div>
    )
}
