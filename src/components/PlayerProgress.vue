<template>
    <div class="progress-group">
        <div class="progress">
            <div
                class="progress-bar progress-bar-animated bg-success"
                role="progressbar"
                :style="{width: `${getPercent()}%`}"
                :aria-valuenow="getPercent()"
                aria-valuemin="0"
                aria-valuemax="100"
            ></div>
        </div>
        <span class="progress-group-label">
            {{ millisToMinutesAndSeconds(player.duration_ms - player.progression_ms) }}
        </span>
    </div>
</template>

<script>
    import { millisToMinutesAndSeconds } from '../utils/format'

    export default {
        props: ['player'],
        setup (props) {

            const getPercent = () => {
                return (100 * props.player.progression_ms) / props.player.duration_ms
            }

            return { millisToMinutesAndSeconds, getPercent }
        }
    }
</script>

<style>
</style>