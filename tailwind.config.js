module.exports = {
    mode: "jit",
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                "landing-photo-1": "url('images/samoyed.webp')",
                "landing-photo-2": "url('images/samoyedWalking.webp')",
                "our-dogs": "url('images/background.webp')",
            },
            maxWidth: {
                1920: "1920px",
                "70%": "70%",
            },
            width: {
                256: "256px",
            },
            height: {
                "10vh": "10vh",
                "160px": "160px",
                104: "26rem",
            },
            margin: {
                "10vh": "10vh",
            },
            translate: {
                "translate-0-5": "transform: translateX(0px,5px)",
            },
            backgroundPosition: {
                "l-50-0": "50% 0%",
            },
            screens: {
                xsm: "400px",
            },
            colors: {
                babyBlue: {
                    0: "#fafcfc",
                    50: "#f0faff",
                    100: "#def3fc",
                    200: "#bbe8fc",
                    300: "#90d1f0",
                    400: "#39bbf7",
                    500: "#0ea3e8",
                    600: "#0289c7",
                    700: "#036fa1",
                    800: "#075d85",
                    900: "#0c4f6e",
                    1500: "#253640",
                },
                royalPink: {
                    50: "#fcf2f4",
                    100: "#fce8eb",
                    200: "#facdd3",
                    300: "#faa7b2",
                    400: "#f57384",
                    500: "#ed4a5f",
                    600: "#db273f",
                    700: "#bf192f",
                    800: "#9e182a",
                    900: "#821726",
                },
            },
            fontFamily: {
                "titan-one": ["Titan One"],
                "radio-canada": ["Radio Canada"],
            },
        },
    },
    variant: {},
    plugins: [require("@tailwindcss/forms")],
};
