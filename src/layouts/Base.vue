<template>
    <div class="site">
        <header class="site__header">Header</header>
        <div class="site__body">
            <slot/>
        </div>
        <footer class="site__footer">Footer</footer>
    </div>
</template>

<script>
export default {
    name: 'BaseLayout'
}
</script>
