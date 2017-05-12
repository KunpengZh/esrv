var lineReader = require('line-reader');
var fs = require('fs');
var Promise = require('bluebird');

exports.txtReader = function (filename, category) {
    return new Promise(function (resolve, reject) {
        fs.exists(filename, function (isFileexist) {
            if (!isFileexist) {
                reject(new Error(filename + " does not exist!"));
            } else {
                var configDoc = {
                    "category": category,
                    "data": []
                }
                var eachLine = Promise.promisify(lineReader.eachLine);
                eachLine(filename, function (line, last) {
                    var result = line.split(',');
                    if (result.length > 0) {
                        var obj = {
                            name :result[0].trim(),
                            attr: result[1]?result[1].trim():''
                        }
                        console.log(category);
                        if(category==="workItem"){
                            obj.workCategory=result[2]?result[2].trim():''
                            console.log("workCategory:" + obj.workCategory);
                        }
                        configDoc.data.push(obj);
                    }
                }).then(function () {
                    resolve(configDoc);
                }).catch(function (err) {
                    console.error(err);
                    reject(err);
                });;
            }
        })
    });
}