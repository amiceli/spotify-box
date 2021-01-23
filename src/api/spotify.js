import SpotifyApi from 'spotify-web-api-js'

class Spotify {

    constructor(accessToken) {
        this.accessToken = accessToken
        this.spotifyApi = new SpotifyApi()

        this.spotifyApi.setAccessToken(accessToken)
    }

    static fromToken(token) {
        return new Spotify(token)
    }

    getLoginUrl() {
        const endpoint = "https://accounts.spotify.com/authorize"
        const id = import.meta.env.VITE_SPOTIFY_CLIENT_ID

        const url = `${endpoint}?client_id=${id}&redirect_uri=http:%2F%2Flocalhost:3000%2Fcallback&scope=user-read-private%20user-read-playback-state%20user-read-email%20streaming%20user-read-currently-playing&response_type=token&state=123`

        return url
    }

    get authHeaders () {
        return {
            'Authorization': `Bearer ${this.accessToken}`
        }
    }

    async play() {
        const url = 'https://api.spotify.com/v1/me/player/play'
        try {
            const response = await fetch(url, {
                method : 'PUT',
                headers : this.authHeaders
            })

            return true
        } catch (e) {
            return false
        }
    }

    async changeRepeatMode (state) {
        const url = `https://api.spotify.com/v1/me/player/repeat?state=${state}`
        try {
            const response = await fetch(url, {
                method : 'PUT',
                headers : this.authHeaders,
            })

            return true
        } catch (e) {
            return false
        }
    }

    async toggleShuffle (enable) {
        const url = `https://api.spotify.com/v1/me/player/shuffle?state=${enable ? "true" : "false"}`
        try {
            const response = await fetch(url, {
                method : 'PUT',
                headers : this.authHeaders
            })

            return true
        } catch (e) {
            return false
        }
    }
    
    async pause() {
        const url = 'https://api.spotify.com/v1/me/player/pause'
        try {
            const response = await fetch(url, {
                method : 'PUT',
                headers : this.authHeaders
            })

            return true
        } catch (e) {
            return false
        }
    }

    async playNext () {
        const url = 'https://api.spotify.com/v1/me/player/next'

        try {
            await fetch(url, {
                method : 'POST',
                headers : this.authHeaders
            })

            return true
        } catch (e) {
            return false
        }
    }

    async playPrevious () {
        const url = 'https://api.spotify.com/v1/me/player/previous'

        try {
            await fetch(url, {
                method : 'POST',
                headers : this.authHeaders
            })

            return true
        } catch (e) {
            return false
        }
    }

    async getCurrentPlayedTrack() {
        try {
            const response = await fetch('https://api.spotify.com/v1/me/player', {
                method: 'GET',
                headers: this.authHeaders
            })
            const json = await response.json()
            const { progress_ms, is_playing, shuffle_state, repeat_state } = json
            const { name: deviceName } = json.device
            const { duration_ms, name: trackName, artists } = json.item

            const trackArtists = artists.map((a) => a.name)

            return {
                progress_ms, repeat_state, is_playing, shuffle_state, trackName, duration_ms, deviceName, trackArtists
            }
        } catch (e) {
            return null
        }
    }

}


export default Spotify