import BaseLayout from '~/layouts/Base.vue'
import '~/assets/scss/main.scss'

export default function ( Vue, { router, head, isClient } )
{
    Vue.component( 'BaseLayout', BaseLayout )

    head.htmlAttrs = { lang: 'en' }
    head.bodyAttrs = { class: 'text-16 leading-normal text-gray-800' }
}
