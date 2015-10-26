var readline = require('readline');
var fs = require('fs');

var outputFileName = 'keys.js';
var outputText = 'module.exports.APIKEY = \'FORECASTAPIKEY\';\nmodule.exports.geonamesUser = \'GEONAMESUSERNAME\';';
var geonamesQuestion = 'Please enter your Geonames username: ';
var forecastQuestion = 'Please enter your Forecast API key: ';

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(geonamesQuestion, function(geonamesUsername){

  if(!geonamesUsername){

    console.log('Invalid Geonames username');
    rl.close();
    process.exit(1);
  }else{

    rl.question(forecastQuestion, function(forecastAPI){

      rl.close();

      if(!forecastAPI){

        console.log('Invalid Forecast API key');
        process.exit(1);
      }else{

        outputText = outputText.replace('FORECASTAPIKEY', forecastAPI).replace('GEONAMESUSERNAME', geonamesUsername);
        fs.writeFile(outputFileName, outputText, function(err){
          if(err){

            console.log('Error writing '+outputFileName);
            process.exit(1);
          }else{

            console.log('Success writing '+outputFileName);
          }
        });
      }
    });
  }
});
