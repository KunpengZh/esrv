set curpath=%cd%
if exist mongodb\data32\mongod.lock (del mongodb\data32\mongod.lock) else echo "lock file not exist"
mongodb\Server32\3.2\bin\mongod --storageEngine=mmapv1 --config mongodb\mongodb32.config
