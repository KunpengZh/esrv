var mongodb = require('./utils/mongo-utils')
var bcrypt = require('bcrypt-nodejs');

var user = {
    "username": "sundameinv",
    "password": "zaq12wsx",
    "role": "Admin",
    "fullname": "Sun YaHong",
    "company": ""
};

user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(5), null);
mongodb.save("users", user, function (err, response) {
    if (err) {
        console.log("error:" + err);
        return;
    } else {
        console.log("user 'sundameinv' has been insert to database");
        console.log("please press control+c to exist");
        return;
    }
})