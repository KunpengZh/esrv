var express = require('express');
var router = express.Router();
var mongodb = require('../utils/mongo-utils')
var multiparty = require('multiparty');
var fs = require('fs');
var filereader = require('../utils/filereader.js');
/* GET users listing. */

router.get('/getallconfigdoc', function (req, res, next) {
  mongodb.find("configdoc", {}, null, function (err, response) {
    if (err) {
      res.json(err);
      res.end();
      return;
    } else {
      res.json(response);
      res.end();
    }
  })
})

router.get('/getconfigdoc', function (req, res, next) {
  if (!req.query.category) {
    res.json({
      errorMsg: "Query parameter is mandatory required",
      status: false
    });
    res.end();
    return;
  }
  var categoryname = req.query.category;
  mongodb.find("configdoc", {
    "category": categoryname
  }, null, function (err, response) {
    if (err) {
      res.json(err);
      res.end();
      return;
    } else {
      res.json(response);
      res.end();
    }
  })
});

router.post("/updateconfigdoc", function (req, res, next) {
  if (!req.body.configCategory || !req.body.configData) {
    res.json({
      errorMsg: "Config Field Category and Data are mandatory required",
      status: false
    });
    res.end();
    return;
  }

  var condition = req.body.configCategory;
  var configData = req.body.configData
  var updatedata = {
    "category": condition.category,
    "data": configData
  }
  updateDoc("configdoc", condition, updatedata, function (err, result) {
    if (err) {
      res.json(err);
      res.end();
      return;
    } else {
      res.json(result);
      res.end();
    }
  })

});

function updateDoc(tablename, condition, data, callback) {
  mongodb.find(tablename, condition, null, function (err, queryresult) {
    if (err) {
      callback({
        'message': err
      });
      return;
    } else {
      if (queryresult.length > 0) {
        mongodb.updateData(tablename, condition, data, function (err, updateresult) {
          if (err) {
            callback({
              'message': err
            });
            return;
          } else {
            callback(null, updateresult);
            return;
          }
        })
      } else {
        mongodb.save(tablename, data, function (err, saveresult) {
          if (err) {
            callback({
              'message': err
            });
            return;
          } else {
            callback(null, saveresult);
            return;
          }
        })
      }
    }
  })
}

router.post('/uploadconfigdoc', function (req, res, next) {
  var form = new multiparty.Form({
    encoding: 'utf-8',
    uploadDir: 'files/configdoc/'
  });

  form.parse(req, function (err, fields, files) {
    if (err) {
      console.log('parse error: ' + err);
      res.json({
        message: err
      });
      res.end();
      return;
    } else {
      if (!fields.category || fields.category.length <= 0) {
        console.log('no category proviced, will return');
        res.json({
          'message': 'no category proviced, will return'
        });
        res.end()
        return;
      }

      var category = fields.category[0];
      var inputFile = files.file[0];
      var uploadedPath = inputFile.path;
      var dstPath = 'files/configdoc/' + inputFile.originalFilename;
      fs.rename(uploadedPath, dstPath, function (err) {
        if (err) {
          console.log('rename error: ' + err);
          res.json({
            message: err
          });
          res.end();
          return;
        } else {
          fs.exists(dstPath, function (isFileExist) {
            if (isFileExist) {
              if (category === "uploadExcel") {
                filereader.excelReader(dstPath).then(function (data) {
                  var processedUpdate = 0;
                  var totalUpdated = 0;
                  var successStatus = true;
                  var errMsg = "";
                  for (var key in data) {
                    totalUpdated++;
                    var obj = data[key];
                    var condition = {
                      "category": obj.category
                    };
                    updateDoc("configdoc", condition, obj, function (err, result) {
                      processedUpdate++;
                      if (err) {
                        successStatus = false
                        errMsg = errMsg + "processedUpdate:" + JSON.stringify(err) + "  ,  ";

                      }
                      if (processedUpdate === totalUpdated) {
                        if (successStatus) {
                          res.json({ "status": "successed" })
                          res.end();
                          return;
                        } else {
                          console.log("failed:" + errMsg);
                          res.json({ message: errMsg });
                          res.end();
                          return;
                        }
                      }
                    })
                  }

                }).catch(function (err) {
                  console.log(err.message);
                  res.json(err);
                  res.end();
                })
              } else {
                filereader.txtReader(dstPath, category).then(function (data) {
                  var condition = {
                    "category": category
                  };
                  updateDoc("configdoc", condition, data, function (err, result) {
                    if (err) {
                      res.json({
                        message: err
                      });
                      res.end();
                      return;
                    } else {
                      res.json(result);
                      res.end();
                    }
                  })

                }).catch(function (err) {
                  console.log(err.message);
                  res.json(err);
                  res.end();
                })
              }
            } else {
              res.json({
                message: "file does not exit"
              });
              res.end()
            }
          })

        }
      });
    }
  });
});


module.exports = router;