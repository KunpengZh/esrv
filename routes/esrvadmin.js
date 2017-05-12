var express = require('express');
var router = express.Router();
var mongodb = require('../utils/mongo-utils')
var bcrypt = require('bcrypt-nodejs');
/* GET users listing. */
router.get('/allusers', function (req, res, next) {
    mongodb.find("users", {}, null, function (err, response) {
        if (err) {
            console.log("/esrvadmin/allusers:" + err);
            res.json(err);
            res.end();
            return;
        } else {
            res.json(response);
            res.end();
        }
    })
});

router.post('/queryuser', function (req, res, next) {

    if (!req.body.condition) {
        console.log("/esrvadmin/queryuser:" +"condition is mandatory required")
        res.json({
            errorMsg: "condition is mandatory required",
            status: false
        });
        res.end();
        return;
    }
    var condition = req.body.condition;
    mongodb.findOne("users", condition, function (err, respons) {
        if (err) {
            console.log("/esrvadmin/queryuser:" +err)
            res.json(err);
            res.end();
            return;
        } else {
            res.json(respons);
            res.end();
        }
    })

});
router.post("/updateuser", function (req, res, next) {
    if (!req.body.condition || !req.body.data) {
        console.log("/esrvadmin/updateuser:" +"condition and updated filed is mandatory required");
        res.json({
            errorMsg: "condition and updated filed is mandatory required",
            status: false
        });
        res.end();
        return;
    }

    var condition = req.body.condition;
    var data = req.body.data;
    if (data.password && data.password.length >= 8) {
        data.password = bcrypt.hashSync(data.password, bcrypt.genSaltSync(5), null);
    }
    mongodb.update("users", condition, data, function (err, response) {
        if (err) {
            console.log("/esrvadmin/updateuser:" +err);
            res.json(err);
            res.end();
            return;
        } else {
            if (response.ok == 1) {
                mongodb.find("users", condition, null, function (err, user) {
                    if (err) {
                        res.json(err);
                        res.end();
                        return;
                    } else {
                        res.json(user);
                        res.end();
                    }
                })
            }
        }
    })
});
router.post("/deleteuser", function (req, res, next) {
    if (!req.body.condition) {
        res.json({
            errorMsg: "condition is mandatory required",
            status: false
        });
        res.end();
        return;
    }

    var condition = req.body.condition;
    mongodb.remove("users", condition, function (err, response) {
        if (err) {
            console.log("/esrvadmin/deleteuser:" + err);
            res.json(err);
            res.end();
            return;
        } else {
            res.json(response);
            res.end();
        }
    })
})

module.exports = router;