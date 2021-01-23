<template>
    <h1>
        callback
    </h1>
</template>

<script>
    import token from '../state/token'
    import router from '../router'
    export default {
        setup() {
            const split = window.location.hash.substr(1).split('&')
            const value = split[0].split('=')[1]
            
            token.value = value

            router.push('/')
        }
    }
</script>

<style>
</style>