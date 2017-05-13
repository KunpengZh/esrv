var express = require('express');
var router = express.Router();
var mongodb = require('../utils/mongo-utils');

var tablename = "workform";

router.post('/', function (req, res, next) {
    console.log(req.body.data);
    var qData = req.body.data;
    var criteria = {};
    if (qData.requestId) {
        criteria.requestId = qData.requestId;
    };
    if (qData.company) {
        criteria.company = qData.company;
    }
    if (qData.workCategory) {
        criteria.workCategory = qData.workCategory;
    }
    if (qData.creationtime && qData.returntime && qData.workers) {
        var WorkForm = mongodb.getConnection(tablename);
        WorkForm
            .find(criteria)
            .where('workers').in(qData.workers)
            .where('returntime').gt(qData.returntime[0]).lt(qData.returntime[1])
            .where('creationtime').gt(qData.creationtime[0]).lt(qData.creationtime[1])
            .exec(function (err, result) {
                if (err) {
                    console.log(err);
                    res.json(err);
                    res.end();
                    return;
                }
                console.log(result);
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
                console.log(result);
                res.json(result);
                res.end();
            });

    } else if (qData.creationtime && qData.workers) {
        var WorkForm = mongodb.getConnection(tablename);
        WorkForm
            .find(criteria)
            .where('workers').in(qData.workers)
            .where('creationtime').gt(qData.creationtime[0]).lt(qData.creationtime[1])
            .exec(function (err, result) {
                if (err) {
                    console.log(err);
                    res.json(err);
                    res.end();
                    return;
                }
                console.log(result);
                res.json(result);
                res.end();
            });

    } else if (qData.returntime && qData.workers) {
        var WorkForm = mongodb.getConnection(tablename);
        WorkForm
            .find(criteria)
            .where('workers').in(qData.workers)
            .where('returntime').gt(qData.returntime[0]).lt(qData.returntime[1])
            .exec(function (err, result) {
                if (err) {
                    console.log(err);
                    res.json(err);
                    res.end();
                    return;
                }
                console.log(result);
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
                console.log(result);
                res.json(result);
                res.end();
            });

    } else if (qData.workers) {
        var WorkForm = mongodb.getConnection(tablename);
        WorkForm
            .find(criteria)
            .where('workers').in(qData.workers)
            .exec(function (err, result) {
                if (err) {
                    console.log(err);
                    res.json(err);
                    res.end();
                    return;
                }
                console.log(result);
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
                console.log(result);
                res.json(result);
                res.end();
            });

    } else {
        console.log(criteria);
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
                console.log(result);
                res.json(result);
                res.end();
            });
    }

    // if (qData.creationtime) {
    //     WorkForm.where('creationtime').gt(qData.creationtime[0]).lt(qData.creationtime[1]);
    // }
    // if (qData.returntime) {
    //     WorkForm
    // }
    // if (qData.workers) {
    //     WorkForm.where('workers').in(qData.workers);
    // }
    // WorkForm.exec(function (err, result) {
    //     if (err) {
    //         console.log(err);
    //         res.json(err);
    //         res.end();
    //         return;
    //     }
    //     console.log(result);
    //     res.json(result);
    //     res.end();
    // });





    //     Person
    // .find({ occupation: /host/ })
    // .where('name.last').equals('Ghost')
    // .where('age').gt(17).lt(66)
    // .where('likes').in(['vaporizing', 'talking'])
    // .limit(10)
    // .sort('-occupation')
    // .select('name occupation')
    // .exec(callback);
});

module.exports = router;