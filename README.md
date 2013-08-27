# Node.js Websocket Test

Uses the [ws library](http://einaros.github.io/ws/).

# Running

``` bash
$ npm install
$ PORT=8080 foreman start
```

# Running on Heroku

``` bash
$ heroku create
$ heroku labs:enable websockets
$ git push heroku master
$ heroku open
```
