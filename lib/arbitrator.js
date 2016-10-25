module.exports = function arbitrator(callback,interval){
    return function(val){//You can pass a reference here.
        setTimeout(function(){
            callback(val);
        },interval);
    }
};