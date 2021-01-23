import token from './token'
import Spotify from '../api/spotify'
import { reactive } from 'vue'

const player = reactive({
    trackName: null,
    deviceName: null,
    progression_ms: null,
    duration_ms: null,
    is_playing: false,
    is_shuffling: false,
    volume: 10,
    repeat : false,
    repeatTrack : true,
    trackArtists : []
})

const loadPlayerState = async () => {
    const status = await Spotify.fromToken(token.value).getCurrentPlayedTrack()

    if (status === null) {
        return
    }

    const {
        progress_ms, is_playing, shuffle_state, trackName, duration_ms, deviceName, repeat_state, trackArtists
    } = status

    player.progression_ms = progress_ms
    player.trackName = trackName
    player.deviceName = deviceName
    player.duration_ms = duration_ms
    player.is_playing = is_playing
    player.is_shuffling = shuffle_state
    player.repeat = repeat_state === 'context'
    player.repeatTrack = repeat_state === 'track'
    player.trackArtists = trackArtists
}

const playNextSong = () => {
    Spotify.fromToken(token.value).playNext()
}

const playPreviousSong = () => {
    Spotify.fromToken(token.value).playPrevious()
}

const toggleShuffle = () => {
    Spotify.fromToken(token.value).toggleShuffle(!player.is_shuffling)
}

const play = () => {
    if (player.is_playing) {
        Spotify.fromToken(token.value).pause()
    } else {
        Spotify.fromToken(token.value).play()
    }
}

const changeRepeatMode = () => {
    let state
    if (player.repeatTrack) {
        state = 'off'
    } else if (player.repeat) {
        state = 'track'
    } else {
        state = "context"
    }

    Spotify.fromToken(token.value).changeRepeatMode(state)
}


export {
    player,
    loadPlayerState,
    playNextSong,
    playPreviousSong,
    play,
    toggleShuffle,
    changeRepeatMode
}