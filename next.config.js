/** @type {import('next').NextConfig} */
const withReactSvg = require("next-react-svg");
const path = require("path");
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
};

module.exports = nextConfig;

module.exports = withReactSvg({
    include: path.resolve(__dirname, "src/assets/icons"),

    webpack(config, options) {
        return config;
    },
})