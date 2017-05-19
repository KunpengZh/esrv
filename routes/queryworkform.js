var express = require('express');
var router = express.Router();
var mongodb = require('../utils/mongo-utils');


router.post('/worker', function (req, res, next) {
    var tablename = "workhistory";
     var criteria = {};
    queryfun(tablename, req, res,criteria);
});

router.post('/workform', function (req, res, next) {
    var tablename = "workform";
     var criteria = {"requestStatus":"Closed"};
    queryfun(tablename, req, res,criteria);
});

var queryfun = function (tablename, req, res,criteria) {
    console.log(req.body.data);
    /**
     * The fireld name between workform and workhistory is different
     */
    var worker='';
    if(tablename==="workhistory"){
        worker="worker";
    }else if(tablename==="workform") {
        worker="workers";
    }

    var qData = req.body.data;
   
    if (qData.requestId) {
        criteria.requestId = qData.requestId;
    };
    if (qData.company) {
        criteria.company = qData.company;
    }
    if (qData.workCategory) {
        criteria.workCategory = qData.workCategory;
    }
    if (qData.requester) {
        criteria.requester = qData.requester;
    }
    if (qData.creationtime && qData.returntime && qData.workers) {
        var WorkForm = mongodb.getConnection(tablename);
        WorkForm
            .find(criteria)
            .where(worker).in(qData.workers)
            .where('returntime').gt(qData.returntime[0]).lt(qData.returntime[1])
            .where('creationtime').gt(qData.creationtime[0]).lt(qData.creationtime[1])
            .exec(function (err, result) {
                if (err) {
                    console.log(err);
                    res.json(err);
                    res.end();
                    return;
                }
                res.json(result);
                res.end();
            });
    } else if (qData.creationtime && qData.returntime) {
        var WorkForm = mongodb.getConnection(tablename);
        WorkForm
            .find(criteria)
            .where('returntime').gt(qData.returntime[0]).lt(qData.returntime[1])
            .where('creationtime').gt(qData.creationtime[0]).lt(qData.creationtime[1])
            .exec(function (err, result) {
                if (err) {
                    console.log(err);
                    res.json(err);
                    res.end();
                    return;
                }

                res.json(result);
                res.end();
            });

    } else if (qData.creationtime && qData.workers) {
        var WorkForm = mongodb.getConnection(tablename);
        WorkForm
            .find(criteria)
            .where(worker).in(qData.workers)
            .where('creationtime').gt(qData.creationtime[0]).lt(qData.creationtime[1])
            .exec(function (err, result) {
                if (err) {
                    console.log(err);
                    res.json(err);
                    res.end();
                    return;
                }

                res.json(result);
                res.end();
            });

    } else if (qData.returntime && qData.workers) {
        var WorkForm = mongodb.getConnection(tablename);
        WorkForm
            .find(criteria)
            .where(worker).in(qData.workers)
            .where('returntime').gt(qData.returntime[0]).lt(qData.returntime[1])
            .exec(function (err, result) {
                if (err) {
                    console.log(err);
                    res.json(err);
                    res.end();
                    return;
                }

                res.json(result);
                res.end();
            });

    } else if (qData.creationtime) {
        var WorkForm = mongodb.getConnection(tablename);
        WorkForm
            .find(criteria)
            .where('creationtime').gt(qData.creationtime[0]).lt(qData.creationtime[1])
            .exec(function (err, result) {
                if (err) {
                    console.log(err);
                    res.json(err);
                    res.end();
                    return;
                }

                res.json(result);
                res.end();
            });

    } else if (qData.workers) {
        var WorkForm = mongodb.getConnection(tablename);
        WorkForm
            .find(criteria)
            .where(worker).in(qData.workers)
            .exec(function (err, result) {
                if (err) {
                    console.log(err);
                    res.json(err);
                    res.end();
                    return;
                }

                res.json(result);
                res.end();
            });

    } else if (qData.returntime) {
        var WorkForm = mongodb.getConnection(tablename);
        WorkForm
            .find(criteria)
            .where('returntime').gt(qData.returntime[0]).lt(qData.returntime[1])
            .exec(function (err, result) {
                if (err) {
                    console.log(err);
                    res.json(err);
                    res.end();
                    return;
                }

                res.json(result);
                res.end();
            });

    } else {
        var WorkForm = mongodb.getConnection(tablename);
        WorkForm
            .find(criteria)
            .exec(function (err, result) {
                if (err) {
                    console.log(err);
                    res.json(err);
                    res.end();
                    return;
                }

                res.json(result);
                res.end();
            });
    }


}

module.exports = router;