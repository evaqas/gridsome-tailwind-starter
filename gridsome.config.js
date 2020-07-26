module.exports = {
    siteName: 'Gridsome',
    siteDescription: '',
    siteUrl: 'http://localhost:8080',
    plugins: [],
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('tailwindcss'),
                    require('autoprefixer'),
                ],
            },
        },
    },
}
