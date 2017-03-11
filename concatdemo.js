var async=require('async');
var fs=require('fs');
async.concat(['./temp/file1.txt', './temp/file2.txt'],fs.readFile,function(err,data){
    console.log(data.toString());
});