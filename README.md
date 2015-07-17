weatherNode is a command line application for Node.js that displays the current day's weather foreast for a given ZIP code. It uses the [Forecast.io](http://forecast.io/) and [GeoNames](http://www.geonames.org/) APIs to fetch the current day's forecast for a given zipcode.

# Set up your API keys before running weatherNode
weatherNode requires a **keys.js** file that is .gitignore'd. Your copy of weatherNode will require you to add a **keys.js** file containing your own API keys. The contents should look like so:

    var APIKEY = 'yourKeyHere'
    var geonamesUser = 'yourUsernameHere';

    module.exports.APIKEY = APIKEY;
    module.exports.geonamesUser = geonamesUser;

You can get these keys for free (with reasonable usage limits) at
* GeoNames: http://www.geonames.org/login
* Forecast.io: 

# Using weatherNode
Request the forecast for any ZIP code by navigating to the weatherNode directory in your command line, then entering "node forecast.js" followed by the ZIP code of your choice. For example: 

    node forecast.js 10021

