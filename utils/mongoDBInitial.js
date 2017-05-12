//var mongodb=require('./mongo-utils.js');
var mongoose = require('mongoose');
var tabConf =require('./table-config');

var options = {
    db_user: "",
    db_pwd: "",
    db_host: "localhost",
    db_port: 27017,
    db_name: "esrv"
};

var dbURL = "mongodb://" + options.db_user + ":" + options.db_pwd + "@" + options.db_host + ":" + options.db_port + "/" + options.db_name;
mongoose.connect(dbURL);
console.log("connected");
var userTableIndexes={
    "username":1,
    "role":1
}
console.log("start to .....")
mongoose.("users",function(err,collection){
    console.log("Hi, here");
    if(err){
        console.log(err);
        return;
    }

    collection.ensureIndex({username: 1}, {role: 1});
})

console.log("finsihsed");
// var dropAndReCreateIndexUserTable=function(){
//     mongodb.dropIndexes("users");
//     mongodb.createIndexes("users",userTableIndexes);
// }

// console.log("To create indexes for users table");
// dropAndReCreateIndexUserTable();
// console.log("finsiehd indexed for users table");
