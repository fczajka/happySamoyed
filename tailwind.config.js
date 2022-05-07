module.exports = {
    mode: "jit",
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                "landing-photo": "url('images/samoyed.webp')",
            },
            height: {
                "10vh": "10vh",
            },
            colors: {
                babyBlue: {
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
                "oleo-script": ["Oleo Script"],
                "radio-canada": ["Radio Canada"],
            },
        },
    },
    variant: {},
    plugins: [require("@tailwindcss/forms")],
};
