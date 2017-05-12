var fs = require('fs');
var path = require('path');
var filename = path.join(path.dirname(__dirname).replace('app', ''), 'config/mongoTables.json');
console.log(filename);


module.exports = JSON.parse(fs.readFileSync(path.normalize(filename)));