<template>
    <div class="sb-player">
        <nav class="navbar">
            <div class="navbar-content">
                <img
                    src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
                    alt="spotify logo"
                >
            </div>
            <div
                class="navbar-content d-md-none ml-auto"
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
        <div
            class="content"
            v-if="player.trackName !== null"
        >
            <h2 class="content-title">
                {{ player.trackName }} / <i class="text-muted">{{ getArtists(player.trackArtists) }} </i>
            </h2>
            <PlayerProgress :player="player" />
        </div>
        <div
            v-else
            class="content"
        >
            Waiting spotify information ...
        </div>
    </div>
</template>

<script>
    import token from '../state/token'
    import PlayerProgress from '../components/PlayerProgress.vue'
    import { 
        player, 
        loadPlayerState, 
        playNextSong,
        playPreviousSong,
        play,
        toggleShuffle,
        changeRepeatMode
    } from '../state/player'
    import Joypad from '../joypad/Joypad'

    export default {
        components: { PlayerProgress },
        setup() {
            const loadTrack = () => {
                loadPlayerState()
            }
            const getArtists = (artists) => {
                return artists.length > 1 ? artists.join(', ') : artists[0]
            }
            const buttonPress = (buttonName) => {
                if (buttonName === 'play') {
                    play()
                } else if (buttonName === 'next') {
                    playNextSong()
                } else if (buttonName === 'previous') {
                    playPreviousSong()
                } else if (buttonName === 'shuffle') {
                    toggleShuffle()
                } else if (buttonName === 'repeat') {
                    changeRepeatMode()
                }
            }
            const axisMove = (direction) => {
                if (direction === 'top') {

                } else {

                }
            }

            Joypad.getOne()
                .addButtonListeners(buttonPress)
                .addAxisListeners(axisMove)
                .handleJoypadEvent()

            setInterval(() => { loadTrack() }, 1000)

            loadTrack()

            return { player, getArtists }
        }
    }
</script>

<style lang="css" scoped>
    .sb-player img {
        width: 30px;
        margin-left: 5px;
        vertical-align: middle;
    }

    .sb-player .bi {
        margin-right: 7px;
        position: relative;
        top: -1px;
        font-size: 20px;
    }

    .sb-player .bi.is--inactive {
        color: red;
    }

    .sb-player__repeat-track {
        position: relative;
    }

    .sb-player__repeat-track span {
        position: absolute;
        right: 8px;
        top: 5px;
        /* color : white !important; */
        height: 10px;
        width: 10px;
        padding: 0;
        font-size: 6px;
        text-align: center;
        border: 1px black solid !important;
        border-radius: 10px;
    }
</style>