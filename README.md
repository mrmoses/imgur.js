imgur.js
===========

A Javascript client for the [Imgur API](http://api.imgur.com/).

You must [register](http://api.imgur.com/oauth2/addclient) your client with the Imgur API, and provide the Client-ID to
make *any* request to the API (see the [Authentication](https://api.imgur.com/#authentication) note). If you want to
perform actions on accounts, the user will have to authorize your application through [OAuth2](https://api.imgur.com/oauth2).

Imgur API Documentation
-----------------------

Our developer documentation can be found [here](https://api.imgur.com/).

Community
---------

The best way to reach out to Imgur for API support would be our
[Google Group](https://groups.google.com/forum/#!forum/imgur), [Twitter](https://twitter.com/imgurapi), or via
 api@imgur.com.

Building the Project
--------------------

  - `npm install`
  - `npm run test` to run tests
  - `npm run build` for built library files imgur.min.js and imgur.js

Using the Project
-----------------

  - `var Imgur = require('imgur');`
  - `var imgurInstance = Imgur(<API CLIENT ID>);`

Available Endpoints
-------------------
  - `imgurInstance.image.get(<image hash>, callback)`
  - `imgurInstance.oauth2.get(<token type>, callback)`

