<template>
    <div class="sb-player-navbar">
        <nav class="navbar">
            <div class="navbar-content">
                <img
                    src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
                    alt="spotify logo"
                >
            </div>
            <div
                class="navbar-content ml-auto"
                v-if="player.trackName !== null"
            >
                <i
                    v-if="player.is_shuffling"
                    class="bi bi-shuffle text-success"
                ></i>
                <i
                    v-if="player.repeat"
                    class="bi bi-arrow-repeat text-success"
                ></i>
                <div
                    v-if="player.repeatTrack"
                    class="sb-player__repeat-track"
                >
                    <i class="bi bi-arrow-repeat text-success"></i>
                    <span class="badge badge-success badge-pill">
                        1
                    </span>
                </div>
                <span
                    v-if="player.is_playing"
                    class="badge badge-success badge-pill"
                >PLAYING</span>
                <span
                    v-else
                    class="badge badge-primary badge-pill"
                >PAUSE</span>
            </div>
        </nav>
    </div>
</template>

<script>
    import {
        player
    } from '../state/player'
    export default {
        setup() {
            return { player }
        }
    }
</script>

<style lang="css" scoped>
    .sb-player-navbar img {
        width: 30px;
        margin-left: 5px;
        vertical-align: middle;
    }

    .sb-player-navbar .bi {
        margin-right: 7px;
        position: relative;
        top: -1px;
        font-size: 20px;
    }

    .sb-player-navbar .bi.is--inactive {
        color: red;
    }

    sb-player__repeat-track {
        position: relative;
    }

    .sb-player-navbar__repeat-track span {
        position: absolute;
        right: 8px;
        top: 5px;
        height: 10px;
        width: 10px;
        padding: 0;
        font-size: 6px;
        text-align: center;
        border: 1px black solid !important;
        border-radius: 10px;
    }
</style>