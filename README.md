weatherNode is a command line application for Node.js that displays the current day's weather foreast for a given ZIP code. It uses the [Forecast.io](http://forecast.io/) and [GeoNames](http://www.geonames.org/) APIs to fetch the current day's forecast for a given zipcode.

# Set up your API keys before running weatherNode
You can add the keys by running 

    node setup.js

and then entering the keys when prompted. Alternatively, you can enter the keys
manually by creating a **keys.js** file containing your own API keys. The contents should look like so:

    var APIKEY = 'yourKeyHere'
    var geonamesUser = 'yourUsernameHere';

    module.exports.APIKEY = APIKEY;
    module.exports.geonamesUser = geonamesUser;

You can get these keys for free (with reasonable usage limits) at
* GeoNames: http://www.geonames.org/login
* Forecast.io: https://developer.forecast.io/register

# Using weatherNode
Request the forecast for any ZIP code by navigating to the weatherNode directory in your command line, then entering "node forecast.js" followed by the ZIP code of your choice. For example: 

    node forecast.js 90210

If you pass multiple ZIP codes as arguments, weatherNode will return a forecast for each.

    node forecast.js 10001 48222


*Fun fact: The 48222 ZIP belongs to a floating post office and its ship addressees: [J. W. Westcott II on Wikipedia](https://en.wikipedia.org/wiki/J._W._Westcott_II)*
