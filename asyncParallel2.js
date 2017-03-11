var stack={};
var async=require('async');

stack.getUsername = function(callback){
    var username="sashi";
    callback(null,username);
}
stack.getUserAge = function(cb){
    var age=30;
    cb(null,age);
}
stack.getGender = function(cb){
    var gender="female";
    cb(gender);
}
async.parallel(stack,function(err,result){
    if (err) console.log(err);
    console.log(result);
    
});