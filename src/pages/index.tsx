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

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://www.aktietech.com.br",
        "name": "AKTIE TECH",
        "image": "https://www.aktietech.com.br/logo.png",
        "url": "https://www.aktietech.com.br",
        "telephone": "+55-45-99135-1089",
        "priceRange": "$$2400.00 - $$5000.00",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "R. Pres. Juscelino Kubitscheck, 1603 - Bairro Coqueiral",
            "addressLocality": "Cascavel",
            "addressRegion": "PR",
            "postalCode": "85807-440",
            "addressCountry": "BR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -24.9555,
            "longitude": -53.4552
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Cascavel"
            },
            {
                "@type": "State",
                "name": "Paraná"
            }
        ],
        "description": "Software house especializada em desenvolvimento de aplicações web, mobile, back-end, front-end e análise de dados em Cascavel e Oeste do Paraná",
        "slogan": "Tecnologia de ponta para seu negócio",
        "serviceType": ["Desenvolvimento Web", "Desenvolvimento Mobile", "Back-end", "Front-end", "Análise de Dados", "Automação de Processos"],
        "knowsAbout": ["React", "React Native", "Next.js", "TypeScript", "Python", "Java", "Quarkus", "Data Science", "Machine Learning"],
        "founder": {
            "@type": "Person",
            "name": "AKTIE TECH Team"
        }
    };

    return (
        <div className="h-screen">
            <Head>
                <title>AKTIE TECH - Desenvolvimento de Software em Cascavel e Oeste do Paraná | Aplicações Web, Mobile e Back-end</title>
                <meta name="description" content="Software house especializada em desenvolvimento de sites, sistemas, aplicativos mobile e análise de dados em Cascavel-PR e região Oeste do Paraná. Desenvolvimento web, back-end, front-end e soluções tecnológicas personalizadas." />
                <meta name="keywords" content="desenvolvimento de software Cascavel, software house Cascavel, desenvolvimento web Cascavel, aplicativos mobile Cascavel, programação Cascavel PR, sistema web Paraná, desenvolvimento app Oeste Paraná, back-end Cascavel, front-end Cascavel, análise de dados Cascavel, React Native Cascavel, Next.js Paraná, TypeScript Cascavel, desenvolvimento sistema Cascavel" />
                <link rel="canonical" href="https://www.aktietech.com.br" />
                <link rel="icon" href="/favicon.ico" />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.aktietech.com.br" />
                <meta property="og:title" content="AKTIE TECH - Desenvolvimento de Software em Cascavel e Oeste do Paraná" />
                <meta property="og:description" content="Software house especializada em desenvolvimento de sites, sistemas, aplicativos mobile e análise de dados em Cascavel-PR e região Oeste do Paraná." />
                <meta property="og:image" content="https://www.aktietech.com.br/og-image.png" />
                <meta property="og:locale" content="pt_BR" />
                <meta property="og:site_name" content="AKTIE TECH" />
                
                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.aktietech.com.br" />
                <meta property="twitter:title" content="AKTIE TECH - Desenvolvimento de Software em Cascavel e Oeste do Paraná" />
                <meta property="twitter:description" content="Software house especializada em desenvolvimento de sites, sistemas, aplicativos mobile e análise de dados em Cascavel-PR e região Oeste do Paraná." />
                <meta property="twitter:image" content="https://www.aktietech.com.br/twitter-image.png" />
                
                {/* Geolocalização */}
                <meta name="geo.region" content="BR-PR" />
                <meta name="geo.placename" content="Cascavel" />
                <meta name="geo.position" content="-24.9555;-53.4552" />
                <meta name="ICBM" content="-24.9555, -53.4552" />
                
                {/* Schema.org JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
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
