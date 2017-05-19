var mongodb = require('../utils/mongo-utils')
var moment = require('moment');

var log4js = require("log4js");
var log4js_config = require("../log4js.json");
log4js.configure(log4js_config);
var Logger = log4js.getLogger('log_file');

var workhistory = {};

var tablename = "workhistory";

workhistory.saveWorkForm = function (request, callback) {

    var workers = request.workers;
    if (workers && workers.length <= 0) {
        Logger.error("No workers find from the request");
        callback(false);
    }

    var indicater = 0;
    for (var i = 0; i < workers.length; i++) {
        worker = workers[i];
        var workhour=request.workhour?parseInt(request.workhour):0;
        var perhourwage=request.perhourwage?parseInt(request.perhourwage):0;
        var obj = {
            "worker": worker,
            "requestId": request.requestId,
            "requester":request.requester,
            "company": request.company,
            "workCategory": request.workCategory,
            "creationtime": request.creationtime,
            "workitem": request.workitem,
            "workhour": request.workhour,
            "workminutes": parseInt(request.workhour ? request.workhour : 0) * 60,
            "returntime": request.returntime,
            "perhourwage": request.perhourwage,
            "requestwage": workhour*perhourwage
        }
        mongodb.save(tablename, obj, function (err, saveres) {
            indicater = indicater + 1;
            /**
             * if indicater===workers.length, then this is the last file
             * then will return
             */
            if (err) {
                Logger.error("Query for companyEmployee config document error:" + err);
                if (indicater === workers.length) {
                    callback(true);
                    return;
                }
            } else {
                Logger.info("WorkHistory Saved, result:" + JSON.stringify(saveres));
                if (indicater === workers.length) {
                    callback(true);
                    return;
                }
            }
        })

    }

};
module.exports = workhistory;