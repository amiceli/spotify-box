<template>
    <div class="sb-login">
        <div>
            <img
                src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
                alt="spotify logo"
            >
            <br>
            <button
                class="btn"
                type="button"
                @click="login()"
            >
                Connect to spotify
            </button>
        </div>
    </div>
</template>

<script>
    import Spotify from '../api/spotify'

    export default {
        setup() {
            const login = () => window.location = Spotify.fromToken(null).getLoginUrl()

            return { login }
        }
    }
</script>

<style lang="css" scoped>
    .sb-login {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .sb-login div {
        display: inline-block;
        text-align: center;
    }

    .sb-login button {
        margin-top: 10px;
    }

    .sb-login img {
        height: 200px;
    }
</style>