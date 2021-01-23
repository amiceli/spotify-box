<template>
    <div class="sb-player-progress">
        <div>
            <h2 class="content-title">
                {{ player.trackName }} / <i class="text-muted">{{ getArtists(player.trackArtists) }} </i>
            </h2>
            <h1 class="h1 text-center">
                {{ millisToMinutesAndSeconds(player.duration_ms - player.progression_ms) }}
            </h1>
        </div>
    </div>
</template>

<script>
    import { millisToMinutesAndSeconds } from '../utils/format'

    export default {
        props: ['player'],
        setup(props) {
            const getArtists = (artists) => {
                return artists.length > 1 ? artists.join(', ') : artists[0]
            }

            return { millisToMinutesAndSeconds, getArtists }
        }
    }
</script>

<style lang="css" scoped>
    .sb-player-progress {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    .sb-player-progress h1 {
        font-size: 100px;
    }

    .sb-player-progress div {
        display: inline-block;
    }
</style>