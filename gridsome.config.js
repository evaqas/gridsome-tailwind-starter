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
                    ...process.env.NODE_ENV === 'production' ? [
                        require('@fullhuman/postcss-purgecss')({
                            content: [ './src/**/*.{vue,js,jsx,html,pug,md,svg}' ],
                            whitelist: [
                                'html',
                                'body',
                                'img',
                                'a',
                                'g-image',
                                'g-image--lazy',
                                'g-image--loaded',
                                'active',
                                'active--exact',
                            ],
                            defaultExtractor: content => content.match( /[A-Za-z0-9-_:/]+/g ) || [],
                        }),
                    ] : [],
                    require('autoprefixer'),
                ],
            },
        },
    },
}
