const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#FF5F05",
                "secondary": "#9453E5",
                "dark-mode": "#111213"
            },
            fontFamily: {
                "sans": ["Work Sans", ...defaultTheme.fontFamily.sans]
            },
            animation: {
                "gradient-x":"gradientX 10s ease infinite",
                "gradient-y":"gradientY 10s ease infinite",
                "gradient-xy": "gradientXY 10s ease infinite",
                "fade-down": "fadeDown 1s ease-in-out",
                "fade-up": "fadeUp 1s ease-in-out",
                "fade-left": "fadeLeft 1s",
                "fade-right": "fadeRight 1s",
                "fade-in": "fadeIn 3s",
                "fade-out": "fadeOut 3s",
                "fade-in-fast": "fadeIn 1s",
                "fade-in-slow": "fadeIn 5s",
                "ping-one": "ping 1s cubic-bezier(0, 0, 0.2, 1)",
            },
            keyframes: {
                gradientY: {
                    "0%, 100%": {
                        "background-size":"400% 400%",
                        "background-position": "center top"
                    },
                    "50%": {
                        "background-size":"200% 200%",
                        "background-position": "center center"
                    }
                },
                gradientX: {
                    "0%, 100%": {
                        "background-size":"200% 200%",
                        "background-position": "left center"
                    },
                    "50%": {
                        "background-size":"200% 200%",
                        "background-position": "right center"
                    }
                },
                gradientXY: {
                    "0%, 100%": {
                        "background-size":"400% 400%",
                        "background-position": "left center"
                    },
                    "50%": {
                        "background-size":"200% 200%",
                        "background-position": "right center"
                    }
                },
                fadeDown: {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(-25%)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                fadeUp: {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(25%)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                fadeLeft: {
                    "0%": {
                        opacity: "0",
                        transform: "translateX(-25%)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateX(0)",
                    },
                },
                fadeRight: {
                    "0%": {
                        opacity: "0",
                        transform: "translateX(25%)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateX(0)",
                    },
                },
                fadeIn: {
                    "0%": {
                        opacity: "0",
                    },
                    "100%": {
                        opacity: "1",
                    },
                },
                fadeOut: {
                    "0%": {
                        opacity: "1",
                    },
                    "100%": {
                        opacity: "0",
                    },
                },
            }
        },
    },
    plugins: [],
};
