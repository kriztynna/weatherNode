var http = require("http");
var https = require("https");
var keys = require("./keys.js");

function printMessage(placeName, summary, precipProb){
  var message = placeName+': '+summary+" day with "+precipProb+"% probability of precipitation."
  console.log(message)
}

function printError(error) {
  console.error(error.message);
}

function getCoords(postalCode) {
	var postalCode = postalCode;
	/*
	 * This implementation supports only US for now, but it could be modified to 
	 * accept a countryCode input by user. 
	 * The geonames.org API supports a number of other countries.
	 */
	var countryCode = 'US'; 
	var URI = 'http://api.geonames.org/postalCodeLookupJSON?postalcode='+postalCode+'&country='+countryCode+'&username='+keys.geonamesUser;
	var request = http.get(
		URI,
		function(response){
			var body="";
			response.on('data',
				function(chunk){
					body+=chunk;
				});
			response.on('end',
				function(){
					if (response.statusCode === 200) {
						try {
							var info = JSON.parse(body);
							var coords = info.postalcodes[0].lat+','+info.postalcodes[0].lng
							var placeName=info.postalcodes[0].placeName;
							getForecast(coords,placeName);
						} catch(error) {
							printError(error);
						}
					}
					else {
						printError({message: "There was an error getting the coords for "+postalCode+". ("+http.STATUS_CODES[response.statusCode]+")"}
							);
					}
				})
		})
}

function getForecast(coords,placeName){
	var URI = 'https://api.forecast.io/forecast/'+keys.APIKEY+'/'+coords;
	var request = https.get(
		URI, 
		function(response){
			var body="";
			response.on('data', 
				function(chunk){
					body+=chunk;
				});
			response.on('end', 
				function(){
					if (response.statusCode === 200) {
						try {
							var outlook = JSON.parse(body);
							printMessage(placeName,outlook.currently.summary, outlook.currently.precipProbability);
						} catch(error) {
							printError(error);
						}
					}
					else {
						printError(
							{message: "There was an error getting the forecast for "+coords+". ("+http.STATUS_CODES[response.statusCode]+")"}
							);
					}
				});
		});
	request.on('error',printError);
}

module.exports.get = getCoords;