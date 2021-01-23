# spotify-box

spotify-box is a arcade like raspberry pi controler make with VueJS 3, Vite and joypad.js GamepadApi wrapper.

![spotify-box](https://raw.githubusercontent.com/amiceli/spotify-box/master/images/spotify-box.jpeg | width=100)
**This project need a Spotify Application** with /callback redirect url.

## Take a look

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