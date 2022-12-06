import Head from "next/head";
import { useEffect, useState } from "react";
import Home from "../components/Home";
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
        <div className="h-screen overflow-x-hidden">
            <Head>
                <title>AKTIE TECH - Tecnologia de ponta para seu negócio</title>
                <meta name="description" content="Desenvolvimento de sites, sistemas e aplicativos sob demanda." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="h-full">
                <Menu />
                <Home />
            </main>
            
            <footer className="w-full flex justify-center mb-2">
                Powered by AKTIE TECH
            </footer>

        </div>
    )
}
