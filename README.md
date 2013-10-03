# Node.js Websocket Test

A tiny demo using the [einaros/ws](http://einaros.github.io/ws/) WebSockets implementation.

# Running Locally

``` bash
npm install
foreman start
```

# Running on Heroku

``` bash
heroku create
heroku labs:enable websockets
git push heroku master
heroku open
```