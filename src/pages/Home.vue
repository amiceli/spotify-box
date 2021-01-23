<template>
    <div class="sb-home">
        <Login v-if="token.value === null" />
        <Player v-else />
    </div>
</template>

<script>
    import token from '../state/token'
    import Login from './Login.vue'
    import Player from './Player.vue'

    export default {
        components : { Login, Player },
        setup() {
            return { token }
        }
    }
</script>

<style scoped>
    .sb-home {
        width: 100%;
        height: 100%;
    }
</style>