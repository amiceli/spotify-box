<template>
    <div class="sb-player">
        <PlayerNavbar />
        <div
            class="content"
            v-if="player.trackName !== null"
        >
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
    import PlayerProgress from '../components/PlayerProgress.vue'
    import PlayerNavbar from '../components/PlayerNavbar.vue'
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
    import token from '../state/token'

    export default {
        components: { PlayerProgress, PlayerNavbar },
        setup() {
            let interval = null
            const loadTrack = () => {
                loadPlayerState()
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
                if (direction === 'bottom') {
                    console.info('Stop spotify box return to login')
                    clearInterval(interval)
                    if (player.is_playing) {
                        play()
                    }
                    token.value = null
                }
            }

            Joypad.getOne()
                .addButtonListeners(buttonPress)
                .addAxisListeners(axisMove)
                .handleJoypadEvent()

            interval = setInterval(() => { loadTrack() }, 1000)

            loadTrack()

            return { player }
        }
    }
</script>

<style lang="css" scoped>
    .sb-player {
        height: 100%;
    }
    .sb-player .content {
        height: calc(100% - 50px);
        margin: 0;
    }
</style>