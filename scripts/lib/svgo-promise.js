var SVGO = require("svgo");


var svgo = new SVGO({
  plugins: [
    {"cleanupIDs": false}
  ]
});

module.exports = function(input) {
  return new Promise(function(resolve, reject) {
    svgo.optimize(input, function(result) {
      if(result.error) {
        reject(result.error)
      }
      else {
        resolve(result.data)
      }
    })
  });
};
