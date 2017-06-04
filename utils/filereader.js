var lineReader = require('line-reader');
var fs = require('fs');
var Promise = require('bluebird');
var Excel = require('exceljs');

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
                            name: result[0].trim(),
                            attr: result[1] ? result[1].trim() : ''
                        }
                        console.log(category);
                        if (category === "workItem") {
                            obj.workCategory = result[2] ? result[2].trim() : ''
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
exports.excelReader = function (filename) {
    return new Promise(function (resolve, reject) {
        var result = {};
        var workbook = new Excel.Workbook();
        workbook.xlsx.readFile(filename)
            .then(function (excelDoc) {
                excelDoc.eachSheet(function (worksheet, sheetId) {
                    var category = worksheet.name;
                    rowCount = worksheet.rowCount;
                    if (rowCount > 1) {
                        var configDoc = {
                            "category": category,
                            "data": []
                        }
                        for (var i = 2; i <= rowCount; i++) {
                            var row = worksheet.getRow(i).values;
                            if (category === "workItem") {
                                var obj = {
                                    name: row[1].trim(),
                                    attr: row[2] ? parseInt(row[2]) : 0,
                                    workCategory: row[3] ? row[3].trim() : ''
                                }
                            } else {
                                var obj = {
                                    name: row[1].trim(),
                                    attr: row[2] ? row[2].trim() : '',
                                }
                            }
                            configDoc.data.push(obj);
                        }
                        result[category] = configDoc;
                    }
                });
                resolve(result);
            }).catch(function (err) {
                console.error(err);
                reject(err);
            })
    })
}