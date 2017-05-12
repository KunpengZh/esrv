set curpath=%cd%
if exist mongodb\data64\data\mongod.lock (del mongodb\data64\data\mongod.lock) else echo "lock file not exist"
mongodb\Server64\3.4\bin\mongod --config mongodb\mongodb64.config
