/** @type {import('next').NextConfig} */
const withReactSvg = require("next-react-svg");
const path = require("path");

module.exports = withReactSvg({
    reactStrictMode: true,
    include: path.resolve(__dirname, "src/assets/icons"),
    
    // Otimizações de SEO
    i18n: {
        locales: ['pt-BR'],
        defaultLocale: 'pt-BR',
    },
    
    // Compressão
    compress: true,
    
    // Headers de segurança e SEO
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin'
                    }
                ]
            }
        ];
    },
    
    webpack(config, options) {
        return config;
    },
})