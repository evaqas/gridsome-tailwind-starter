<template>
    <BaseLayout>

        <h1>{{ $static.metadata.siteName }}</h1>

        <KitchenSink></KitchenSink>

    </BaseLayout>
</template>

<static-query>
query {
    metadata {
        siteName
    }
}
</static-query>

<script>
import KitchenSink from '~/components/KitchenSink'

export default {
    name: 'Homepage',
    components: { KitchenSink },
    metaInfo() {
        return {
            title: this.$static.metadata.siteName
        }
    }
}
</script>
