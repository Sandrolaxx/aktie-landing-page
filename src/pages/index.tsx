import Head from "next/head"
import AktieIcon from "../assets/icons/aktLogo.svg";

export default function Home() {
    return (
        <div>
            <Head>
                <title>AKTIE TECH - Tecnologia de ponta para seu negócio</title>
                <meta name="description" content="Desenvolvimento de sites, sistemas e aplicativos sob demanda." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <AktieIcon width={112} height={112} />
            </main>
            <footer className="w-full flex justify-center mt-auto mb-2">
                Powered by AKTIE TECH
            </footer>

        </div>
    )
}
