import Head from "next/head";
import { useEffect, useState } from "react";
import Menu from "../components/Menu";

export default function Termos() {
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
                <title>Termos de Uso - Sons Rodrigo Faro</title>
                <meta name="description" content="Termos de Uso do aplicativo Sons Rodrigo Faro" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={"h-full"}>
                <Menu showMobileMenu={false} setShowMobileMenu={() => {}} renderMobileMenuIcon={false} />
                
                <div className="container mx-auto px-4 py-20 max-w-4xl">
                    <h1 className="text-4xl font-bold mb-8">Termos de Uso - Sons Rodrigo Faro</h1>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">1. Aceitação dos Termos</h2>
                        <p>
                            Ao baixar e utilizar o aplicativo Sons Rodrigo Faro, você concorda com os termos aqui descritos.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">2. Descrição do Serviço</h2>
                        <p>
                            O aplicativo tem finalidade exclusivamente de entretenimento, fornecendo efeitos sonoros e frases para uso recreativo.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">3. Propriedade Intelectual</h2>
                        <p className="mb-4">
                            O conteúdo disponibilizado (áudios e imagens) é utilizado para fins de humor e entretenimento. Os direitos de imagem e voz pertencem aos seus respectivos detentores.
                        </p>
                        <p>
                            O uso deste aplicativo não concede ao usuário qualquer direito de propriedade sobre o conteúdo.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">4. Limitação de Responsabilidade</h2>
                        <p className="mb-4">
                            A Aktie Tech não se responsabiliza por qualquer dano direto ou indireto decorrente do uso do aplicativo ou pela impossibilidade de uso do mesmo.
                        </p>
                        <p>
                            O aplicativo é fornecido "como está".
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">5. Modificações</h2>
                        <p>
                            Reservamo-nos o direito de modificar ou descontinuar o aplicativo a qualquer momento, sem aviso prévio.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">6. Foro</h2>
                        <p>
                            Para dirimir quaisquer dúvidas oriundas deste termo, fica eleito o foro da comarca de Cascavel, PR.
                        </p>
                    </section>
                </div>

                <footer className="h-14 bottom-14 flex justify-center pt-4">
                    Powered by AKTIE TECH
                </footer>
            </main>
        </div>
    )
}