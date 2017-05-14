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
    /**
     * To get all Config Docs
     */
    mongodb.find("configdoc", {}, null, function (err, resdoc) {
        if (err) {
            Logger.error("Query for companyEmployee config document error:" + err);
            callback(false);
            return
        }
        
        if (!resdoc || resdoc.length <= 0) {
            Logger.error("Invalidate companyEmployee config document format");
            callback(false);
            return;
        }

        /**
         * config the 3 config docs which required when generate workhistory
         */

        var dbworkitems, dbworkers, dbcompanies;

        for (var i = 0; i < resdoc.length; i++) {
            if (resdoc[i]["category"] === "workItem") {
                dbworkitems = resdoc[i]["data"];
            }
            if (resdoc[i]["category"] === "companyEmployee") {
                dbworkers = resdoc[i]["data"];
            }
            if (resdoc[i]["category"] === "companySource") {
                dbcompanies = resdoc[i]["data"];
            }
        }
        var indicater = 0;
        for (var i = 0; i < workers.length; i++) {
            worker = workers[i];
            for (var k = 0; k < dbworkers.length; k++) {
                if (dbworkers[k]["name"] === worker) {
                    var perhourwage = 0;
                    for (var l = 0; l < dbworkitems.length; l++) {
                        if (dbworkitems[l]["name"] === request.workitem) {
                            perhourwage = dbworkitems[l]["attr"];
                        }
                    }
                    var obj = {
                        "worker": worker,
                        "requestId": request.requestId,
                        "company": dbworkers[k]["attr"],
                        "serviceCompany": request.company,
                        "creationtime": request.creationtime,
                        "workitem": request.workitem,
                        "workhour": request.workhour,
                        "workminutes":parseInt(request.workhour?request.workhour:0)*60,
                        "returntime": request.returntime,
                        "perhourwage": parseInt(perhourwage),
                        "requestwage": parseInt(request.workhour?request.workhour:0) * parseInt(perhourwage)
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
            }

        }
    })
};
module.exports = workhistory;