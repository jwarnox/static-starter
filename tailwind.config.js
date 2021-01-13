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
            colors: {
                brand: {
                    100: '#E30713',
                    200: '#000000',
                    300: '#24272A'
                },
            },
            // fontFamily: {
            //     'brand': ['Brand', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
            // }
        }
    },
    variants: {},
    plugins: [require("@tailwindcss/typography")],
};
