module.exports = {
    purge: {
        mode: "all",
        content: ["./src/**/*.html"],
        options: {
            whitelist: [],
        },
    },
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {},
        },
    },
    variants: {},
    plugins: [require("@tailwindcss/typography")],
};
