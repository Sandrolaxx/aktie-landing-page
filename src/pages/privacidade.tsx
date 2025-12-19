import Head from "next/head";
import { useEffect, useState } from "react";
import Menu from "../components/Menu";

export default function Privacidade() {
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
                <title>Política de Privacidade - Sons Rodrigo Faro</title>
                <meta name="description" content="Política de Privacidade do aplicativo Sons Rodrigo Faro" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="h-full">
                <Menu  showMobileMenu={false} setShowMobileMenu={() => {}} renderMobileMenuIcon={false} />
                
                <div className="container mx-auto px-4 py-20 max-w-4xl">
                    <h1 className="text-4xl font-bold mb-8">Política de Privacidade - Sons Rodrigo Faro</h1>
                    
                    <p className="mb-4">
                        <strong>Última atualização:</strong> 01/01/2026
                    </p>

                    <p className="mb-6">
                        A Aktie Tech preza pela sua privacidade. Esta Política de Privacidade explica como as informações são coletadas e utilizadas no aplicativo Sons Rodrigo Faro.
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">1. Coleta de Informações</h2>
                        <p>
                            O aplicativo não coleta dados pessoais identificáveis (como nome ou e-mail) diretamente. No entanto, utilizamos serviços de terceiros que podem coletar informações usadas para identificar você.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">2. Serviços de Terceiros</h2>
                        <p className="mb-4">
                            O aplicativo utiliza os seguintes serviços que podem coletar dados de acordo com suas próprias políticas:
                        </p>
                        <ul className="list-disc pl-8 space-y-2">
                            <li>
                                <strong>Google Play Services:</strong> Para funcionamento do sistema Android.
                            </li>
                            <li>
                                <strong>AdMob (Google):</strong> Para exibição de anúncios. O Google pode usar identificadores de publicidade do dispositivo para personalizar anúncios e analisar o tráfego.
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">3. Cookies e Identificadores</h2>
                        <p>
                            Anunciantes terceiros podem utilizar cookies ou identificadores anônimos para rastrear a eficácia dos anúncios exibidos no aplicativo.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">4. Privacidade das Crianças</h2>
                        <p>
                            Este aplicativo não se destina a coletar dados de crianças menores de 13 anos de forma consciente. Caso você seja pai ou responsável e saiba que seu filho nos forneceu dados, entre em contato.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">5. Alterações nesta Política</h2>
                        <p>
                            Podemos atualizar nossa Política de Privacidade periodicamente. Recomendamos que você revise esta página para conferir as mudanças.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">6. Contato</h2>
                        <p>
                            Em caso de dúvidas, entre em contato pelo e-mail: <a href="mailto:sandrolaxx@gmail.com" className="text-blue-600 hover:underline">sandrolaxx@gmail.com</a>.
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