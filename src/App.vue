<template>
    <router-view />
</template>

<script setup>
    import "halfmoon/css/halfmoon-variables.min.css"
    import halfmoon from 'halfmoon'

    halfmoon.toggleDarkMode()
</script>

<style lang="css">
    html,
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    #app {
        width: 100%;
        height: 100%;
    }
</style>
