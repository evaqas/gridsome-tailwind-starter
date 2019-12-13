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
                    ...process.env.NODE_ENV === 'production'
                        ? [ require('@fullhuman/postcss-purgecss')({
                            content: ['./src/**/*.{vue,js,html,yaml,svg}'],
                            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
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
                        }), ]
                        : [],
                    require('autoprefixer'),
                ],
            },
        },
    },
}
