import Head from "next/head"
import Menu from "../components/Menu"

export default function Home() {
    return (
        <div className="h-screen">
            <Head>
                <title>AKTIE TECH - Tecnologia de ponta para seu negócio</title>
                <meta name="description" content="Desenvolvimento de sites, sistemas e aplicativos sob demanda." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="h-full">
                <Menu />
                <div className="w-full h-2/3 flex justify-center bg-purple-100">
                    <div className="w-1/2 p-32">
                        <p className="text-3xl whitespace-pre-wrap">
                            Tecnologia de ponta para sua empresa,{"\n"}
                            de sistemas complexos até seu primeiro aplicativo
                            podemos ajudar a agregar cada vez mais {"\n"}
                            valor ao seu negócio
                        </p>
                    </div>
                    <div className="w-1/2 p-32">
                        Teste
                    </div>
                </div>
            </main>
            <footer className="w-full flex justify-center mb-2">
                Powered by AKTIE TECH
            </footer>

        </div>
    )
}
