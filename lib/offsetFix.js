
function offsetFix(numMinutes){
    var numMinutes = parseInt(numMinutes);
    if(!numMinutes) return "+00:00"; //0 and bullshit

    function pad(number) {
      var resp;
      var isNeg = (number < 0);
      var number = (isNeg ? number * -1 : number);

      if (number < 10) {
        return '0' + number;
      }
      return number;
    };

    var isNeg      = numMinutes < 0;
    var numMinutes = (isNeg ? numMinutes * -1 : numMinutes);
    var numHours   = Math.floor(numMinutes/60);
    var remainMin  = (numMinutes%60);

    var numHoursString  = pad(numHours);
    var remainMinString = pad(remainMin);

    var _resp = numHoursString + ":" + remainMinString;
    return (isNeg ? "+" : "-") + _resp;

};
module.exports = offsetFix;