// default ddd     mmm dd yyyy HH:MM:ss            Sat Jun 09 2007 17:46:21
// shortDate       m/d/yy                          6/9/07
// mediumDate      mmm d, yyyy                     Jun 9, 2007
// longDate        mmmm d, yyyy                    June 9, 2007
// fullDate        dddd, mmmm d, yyyy              Saturday, June 9, 2007
// shortTime       h:MM TT                         5:46 PM
// mediumTime      h:MM:ss TT                      5:46:21 PM
// longTime        h:MM:ss TT Z                    5:46:21 PM EST
// isoDate         yyyy-mm-dd                      2007-06-09
// isoTime         HH:MM:ss                        17:46:21
// isoDateTime     yyyy-mm-dd'T'HH:MM:ss           2007-06-09T17:46:21
// isoUtcDateTime  UTC:yyyy-mm-dd'T'HH:MM:ss'Z'    2007-06-09T22:46:21Z


var dateFormatter = require('./format.js');
var dateFromISO   = require('./fromISOString.js');
var now = require('./now.js');
var dateToUnix = require('./dateToUnix.js');
var Arbitrator = require('./arbitrator.js');
var changeDate = require('./changeDate.js');

// var isoFormat = function(dateObj) {
//     function pad(number) {
//       if (number < 10) {
//         return '0' + number;
//       }
//       return number;
//     }

//     var toISOString = function() {
//       return this.getUTCFullYear() +
//         '-' + pad(this.getUTCMonth() + 1) +
//         '-' + pad(this.getUTCDate()) +
//         'T' + pad(this.getUTCHours()) +
//         ':' + pad(this.getUTCMinutes()) +
//         ':' + pad(this.getUTCSeconds()) +
//         '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
//         'Z';
//     };

//     return toISOString.call(dateObj)
// };




// var CONF = {
//     ISOFORMAT:'isoDateTime'
// };

// //This would be where one starts reading.
// var momentlte = function(dateObjOrString){
//     var _date;
//     var ISOStringPassed = typeof dateObjOrString === 'string';
//     var DateObjPassed   = typeof dateObjOrString === 'object';
//     // var IntegersPassed  = typeof dateObjOrString === 'number';

//     if(ISOStringPassed){
//         _date = dateFromISO(dateObjOrString);
//     }else if(DateObjPassed){
//         _date = new Date(dateObjOrString);
//     }else{
//         throw "You passed bad arguments to the momentlte constructor.  Bad. Bad. Bad."
//     }

//     var _response = function(val){ //If anyone can think of a better behavior for this, let me know
//         return momentlte(val);
//     };

//     _response.every = function(numValue,_unit,callback){
//         var arbitrator = Arbitrator(callback, numValue * 1000);
//         return arbitrator;
//     };

//     _response.add = function(interval,unit){
//         var newDate = changeDate(_date,interval,unit);
//         return momentlte(newDate);
//     };

//     _response.minus = function(val,unit){ 
//         return _response.add((-1 * val),unit);
//     };

//     _response.toLocaleISOString = function(){
//         throw "You didnt implement this so you suck."
//     };

//     _response.toISOString = function(){
//         return isoFormat(_date);
//     };

//     _response.format = function(formatStr){
//         return dateFormatter(_date,formatStr);
//     };

//     _response.valueOf = function(){
//         return +_date;
//     };

//     return _response;
// };
        console.log("|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*")
        console.log("|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*")
        console.log("|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*")
        console.log()
        console.log("|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*")
        console.log("|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*")
        console.log("|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*")
module.exports = momentlte
