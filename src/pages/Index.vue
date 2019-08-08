<template>
    <BaseLayout>

        <h1>{{ $static.metaData.siteName }}</h1>

        <KitchenSink></KitchenSink>

    </BaseLayout>
</template>

<static-query>
query {
    metaData {
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
            title: this.$static.metaData.siteName
        }
    }
}
</script>
