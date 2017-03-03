/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var readline = require('readline');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {

  fs.readFile(filePath, function(err, data) {
    console.log('DATA: ', data);
    console.log('TYPEOF DATA: ', typeof data);
    var rl = readline.createInterface({
      input: fs.createReadStream(filePath)
    });
    rl.on('line', function(line) {
      console.log('HERE IS THE LINE: ', line);
      callback(err, line);
    });
    callback(err, data);
  });

};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url) {
  // TODO
  var code = undefined;
  request(url, function (err, response) {
    if (!err) {
      code = response.statusCode;
    }
  });
  return code;
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
