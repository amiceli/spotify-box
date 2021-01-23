# spotify-box

spotify-box is a arcade like raspberry pi controler make with VueJS 3, Vite and joypad.js GamepadApi wrapper.

![spotify-box](https://raw.githubusercontent.com/amiceli/spotify-box/master/images/spotify-box.jpeg)

Arcade buttons do :

- play
- pause
- play next
- play previous
- enable/disable shuffle mode
- change repeat mode to track, context or none

Axis allow to : 

- stop spotify-box and return to login page
- Start login with click on button (if your don't have touchscreen it can be useful)

**This project need a Spotify Application** with /callback redirect url.

## Install project

    npm install

## Configuration

You should copy `src/mapping.example.js` into `src/mapping.js` and change
button/action mapping according to your gamepad.

Same for `env.example` and change `VITE_SPOTIFY_CLIENT_ID`.

## Run

    npm run dev

## Build

    npm run build

## Bonus

Currently I use [raspotify](https://dtcooper.github.io/raspotify/) to play son fromm my raspberry as avalaible device.