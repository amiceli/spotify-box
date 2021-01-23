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

## Production

Currently 3000 port is hard coded so I give you my nginx config :

~~~nginx
server {

    listen          3000;
    listen          [::]:3000;
    server_name     _;
    root            /home/pi/www/spotify-box/dist/;
    index  		    index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    error_page   500 502 503 504  /50x.html;

    location = /50x.html {
        root   /usr/share/nginx/html;
    }

}
~~~

## Bonus

Currently I use [raspotify](https://dtcooper.github.io/raspotify/) to play song from my raspberry as avalaible device.