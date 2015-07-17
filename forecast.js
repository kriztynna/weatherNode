var outlook = require("./outlook.js");

/* 
 * Will use ZIP codes entered in the 
 * command line as its arguments
 */
var ZIPs = process.argv.slice(2)

ZIPs.forEach(outlook.get);