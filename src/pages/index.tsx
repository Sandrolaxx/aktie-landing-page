import Head from "next/head"
import Menu from "../components/Menu"
import { useTheme } from "next-themes";

export default function Home() {
    const { theme } = useTheme();

    return (
        <div className="h-screen">
            <Head>
                <title>AKTIE TECH - Tecnologia de ponta para seu negócio</title>
                <meta name="description" content="Desenvolvimento de sites, sistemas e aplicativos sob demanda." />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
            </Head>

            <main className="h-full font-work">
                <Menu />
                <div className="w-full h-3/4 flex justify-center">
                    <div className="w-1/2 flex flex-col justify-center items-center">
                        <p className="text-3xl whitespace-pre-wrap">
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
                                bg-gradient-to-r from-primary via-red-500 to-secondary animate-gradient-x">
                                Contate-nos
                            </button>
                            <button className="w-40 h-14 font-medium text-lg border rounded-full">
                                Veja mais
                            </button>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col justify-center items-center">
                        FOTO
                    </div>
                </div>
            </main>
            <footer className="w-full flex justify-center mb-2">
                Powered by AKTIE TECH
            </footer>

        </div>
    )
}
