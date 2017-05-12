var express = require('express');
var router = express.Router();
var mongodb = require('../utils/mongo-utils')
var multiparty = require('multiparty');
var fs = require('fs');
var filereader = require('../utils/filereader.js');
var moment = require('moment');
var workhistory = require('../services/workhistory');

var log4js = require("log4js");
var log4js_config = require("../log4js.json");
log4js.configure(log4js_config);
var Logger = log4js.getLogger('log_file');

var tablename = "workform";

router.get('/getr', function (req, res, next) {
    var WorkForm = mongodb.getConnection(tablename);
    WorkForm
        .find({})
        .sort('-requestId')
        .limit(50)
        .exec(function (err, result) {
            if (err) {
                res.json(err);
                res.end();
                return;
            }
            res.json(result);
            res.end();
        });


    //     Person
    // .find({ occupation: /host/ })
    // .where('name.last').equals('Ghost')
    // .where('age').gt(17).lt(66)
    // .where('likes').in(['vaporizing', 'talking'])
    // .limit(10)
    // .sort('-occupation')
    // .select('name occupation')
    // .exec(callback);
})

router.get("/all", function (req, res, next) {
    mongodb.find(tablename, {}, null, function (err, result) {
        if (err) {
            Logger.error("to get all request error: " + err);
            res.json({message:err});
            res.end();
            return;
        }
        res.json(result);
        res.end();

    })
})

router.post("/save", function (req, res, next) {
    if (!req.body.data || !req.body.data.requestId) {
        Logger.error("Bad request, no data find");
        res.json({
            message: "Bad request, no data find",
            status: false
        });
        res.end();
        return;
    }

    var reqDoc = req.body.data;
    if (reqDoc.returntime && reqDoc.returntime !== "") {
        reqDoc.returntime = moment(reqDoc.returntime).format("YYYY-MM-DD HH:mm");
    }
    var condition;
    if (reqDoc._id) {
        condition = {
            _id: reqDoc._id
        }
    } else {
        condition = {
            requestId: reqDoc.requestId
        }
    }

    mongodb.find(tablename, condition, null, function (err, result) {
        if (err) {
            Logger.error("Query document error:" + JSON.stringify(err));
            res.json({
                message: err
            });
            res.end();
            return;
        }
        if (result.length > 0) {
            mongodb.update(tablename, condition, reqDoc, function (err, updateres) {
                if (err) {
                    Logger.error("update document error:" + JSON.stringify(err));
                    res.json({
                        message: err
                    });
                    res.end();
                    return;
                } else {
                    if (reqDoc.requestStatus === "Closed") {
                        workhistory.saveWorkForm(reqDoc,function (indicator) {
                            if (indicator) {
                                Logger.info("Request Playload: " + JSON.stringify(reqDoc));
                                res.json(reqDoc);
                                res.end();
                                return;
                            } else {
                                Logger.error("Save data into workhistory table error");
                                res.json({
                                    message: err
                                });
                                res.end();
                                return;
                            }

                        })
                    } else {
                        Logger.info("Request Playload: " + JSON.stringify(reqDoc));
                        res.json(reqDoc);
                        res.end();
                        return;
                    }
                }
            })
        } else {
            mongodb.save(tablename, reqDoc, function (err, saveres) {
                if (err) {
                    Logger.error("Create new request Err: " + err);
                    res.json({
                        message: err
                    });
                    res.end();
                    return;
                } else {
                    Logger.info("Request Playload: " + JSON.stringify(reqDoc));
                    res.json(saveres);
                    res.end();
                    return;
                }
            })
        }
    })


});

router.get('/now', function (req, res, next) {
    var strnow = moment().format("YYYY-MM-DD HH:mm");
    res.write(strnow);
    res.end();
})
router.get("/requestid", function (req, res, next) {
    var indextable = "requestIdIndex";
    mongodb.find(indextable, {}, null, function (err, result) {
        if (err) {
            Logger.error("Query Request Err: " + err);
            res.json({
                message: err
            });
            res.end();
            return;
        } else {
            var doc = null
            var index = 1;
            if (result.length > 0) {
                var doc = result[0];
            }
            var strtime = moment().format("YYYY-MM-DD HH:mm");
            var strnow = moment().format("YYYY-MM-DD");
            strnow = strnow.replace(/\-/g, "");
            if (doc) {
                if (doc.curdate && doc.curdate === strnow) {

                    if (doc.index) {
                        index = ++doc.index;
                    }
                    doc.index == index;
                    mongodb.update(indextable, {
                        _id: doc._id
                    }, {
                        index: index
                    }, function (err, result) {
                        if (err) {
                            Logger.error("Update Index Table Error: " + err);
                            res.json({
                                message: err
                            });
                            res.end();
                            return;
                        }
                    })
                } else {
                    mongodb.update(indextable, {
                        _id: doc._id
                    }, {
                        curdate: strnow,
                        index: index
                    }, function (err, result) {
                        if (err) {
                            Logger.error("Update Index Table Error: " + err);
                            res.json({
                                message: err
                            });
                            res.end();
                            return;
                        }
                    })
                }
            } else {
                mongodb.save(indextable, {
                    curdate: strnow,
                    index: index
                }, function (err, result) {
                    if (err) {
                        Logger.error("Create new Request ID Index Error: " + err);
                        res.json({
                            message: err
                        });
                        res.end();
                        return;
                    }
                })
            }
            if (index < 10) {
                strnow = strnow + "000" + index;
            } else if (index < 100) {
                strnow = strnow + "00" + index;
            } else if (index < 1000) {
                strnow = strnow + "0" + index;
            }

            res.json({
                requestId: strnow,
                strtime: strtime
            });
            res.end();

        }
    })
})

router.post('/upload', function (req, res, next) {
    var form = new multiparty.Form({
        encoding: 'utf-8',
        uploadDir: 'files/configdoc/'
    });

    form.parse(req, function (err, fields, files) {
        if (err) {
            Logger.error('workformapi upload parse error: ' + err);
            res.json({
                message: err
            });
            res.end();
            return;
        } else {
            if (!fields.requestId) {
                Logger.error('workformapi upload error, no  WorkForm ID or attachment list');
                res.json({
                    'message': '没有派工单编号'
                });
                res.end();
                return;
            }
        }
        var requestId = fields.requestId[0];
        /**
         * Query Database to get exist workdocument first
         */
        mongodb.find(tablename, {
            "requestId": requestId
        }, null, function (err, qresult) {
            if (err) {
                Logger.error("Query database to get exist workdocument error:" + err);
                res.json({
                    message: err
                });
                res.end();
                return;
            }
            var workdocument
            if (qresult && qresult.length > 0) {
                workdocument = qresult[0].workdocument;
            } else {
                res.json({
                    message: "没有找到相对应的派工单"
                });
                res.end();
                return;
            }

            if (workdocument === "") {
                Logger.error("workformapi/upload:" + requestId + "do not have a validate workdocument , will set to default");
                workdocument = [];
            }


            var description = fields.description ? fields.description[0] : '';
            var uploadtime = moment().format("YYYY-MM-DD HH:mm:ss");
            var middlename = uploadtime;
            middlename = middlename.replace(/\-/g, "");
            middlename = middlename.replace(/\:/g, "");
            middlename = middlename.replace(/\ /g, "");

            var filesNum = 0;

            for (var i = 0; i < files.file.length; i++) {
                var inputFile = files.file[i];
                var uploadedPath = inputFile.path;
                var dstPath = 'public/workforms/' + requestId + "_" + middlename + "_" + inputFile.originalFilename;
                console.log("workformapi/upload: " + dstPath);
                var attachRecord = {
                    filename: dstPath,
                    uploadtime: uploadtime,
                    description: description
                }
                fs.rename(uploadedPath, dstPath, function (err) {
                    if (err) {
                        Logger.error('rename error: ' + err);
                        res.json({
                            "message": err
                        });
                        res.end();
                        return
                    } else {
                        fs.exists(dstPath, function (isFileExist) {
                            if (isFileExist) {
                                workdocument.push(attachRecord);
                                filesNum = filesNum + 1;
                                /**
                                 * if filesNum===files.file.length, then this is the last file
                                 * Then will call the function to update database
                                 */
                                if (filesNum === files.file.length) {
                                    Logger.error("workformapi/upload: to update databaes with ---" + JSON.stringify(workdocument));
                                    updateWorkDocument(requestId, workdocument, function (upres) {
                                        res.json(upres);
                                        res.end();
                                    });
                                }
                            } else {
                                res.json({
                                    message: "file upload failed"
                                });
                                res.end()
                                return;
                            }
                        })
                    }
                });
            }
        })
    });
});

var updateWorkDocument = function (requestId, workdocument, callback) {
    mongodb.update(tablename, {
        "requestId": requestId
    }, {
        "workdocument": workdocument
    }, function (err, result) {
        if (err) {
            Logger.error("workformapi/upload: " + err);
            callback({
                "message": err
            });
        }
        mongodb.find(tablename, {
            "requestId": requestId
        }, null, function (err, queryres) {
            if (err) {
                Logger.error("workformapi/upload: " + err);
                callback({
                    "message": err
                });
            }
            callback(queryres);
        })
    })
}


module.exports = router;