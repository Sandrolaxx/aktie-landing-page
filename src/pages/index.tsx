import Head from "next/head";
import { useEffect, useState } from "react";
import Home from "../components/Home";
import Menu from "../components/Menu";
import animationData from "../assets/lottie/apps.json";
import Lottie from "lottie-react";

export default function Main() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="h-screen overflow-x-hidden">
            <Head>
                <title>AKTIE TECH - Tecnologia de ponta para seu negócio</title>
                <meta name="description" content="Desenvolvimento de sites, sistemas e aplicativos sob demanda." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="h-full">
                <Menu />
                <Home />
                <span className="w-full h-full flex flex-col items-center">
                    <span className="w-3/4 h-24 pt-24">
                        <hr className="h-0.5 bg-primary dark:bg-secondary rounded-full" />
                    </span>
                    <div className="w-full h-full flex justify-center items-center">
                        <div className="mt-10 animate-fade-in">
                            <Lottie animationData={animationData} />;
                        </div>
                        <span className="">
                            <p className="text-2xl md:whitespace-pre-wrap lg:text-3xl">
                                Desenvolva agora mesmo {"\n"}
                                o aplicativo para sua solução.
                            </p>
                        </span>
                    </div>
                </span>

                <footer className="h-14 bottom-14 flex justify-center pt-4">
                    Powered by AKTIE TECH
                </footer>
            </main>
        </div>
    )
}
