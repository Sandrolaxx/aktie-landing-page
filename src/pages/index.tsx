import Head from "next/head";
import { useEffect, useState } from "react";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Menu from "../components/Menu";
import Solutions from "../components/Solutions";
import Team from "../components/Team";
import Technics from "../components/Technics";

export default function Main() {
    const [mounted, setMounted] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

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
                <meta name="description" content="Desenvolvimento de sites, sistemas e aplicativos sob demanda em Cascavel e Região." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`h-full ${showMobileMenu && 'overflow-y-hidden'}`}>
                <Menu showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu} />
                <Home />
                <Solutions />
                <Team />
                <Technics />
                <Contact />
                <footer className="h-14 bottom-14 flex justify-center pt-4">
                    Powered by AKTIE TECH
                </footer>
            </main>
        </div>
    )
}
