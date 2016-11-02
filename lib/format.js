var ordinalSuffix = require('./ordinalSuffix.js')

dateFormat.masks = {
  'default':               'ddd mmm dd yyyy HH:MM:ss',
  'shortDate':             'm/d/yy',
  'mediumDate':            'mmm d, yyyy',
  'longDate':              'mmmm d, yyyy',
  'fullDate':              'dddd, mmmm d, yyyy',
  'shortTime':             'h:MM TT',
  'mediumTime':            'h:MM:ss TT',
  'longTime':              'h:MM:ss TT Z',
  'isoDate':               'yyyy-mm-dd',
  'isoTime':               'HH:MM:ss',
  'isoDateTime':           'yyyy-mm-dd\'T\'HH:MM:sso',
  'isoUtcDateTime':        'UTC:yyyy-mm-dd\'T\'HH:MM:ss\'Z\'',
  'expiresHeaderFormat':   'ddd, dd mmm yyyy HH:MM:ss Z'
};

// Internationalization strings
dateFormat.i18n = {
  dayNames: [
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
    // 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ],
  monthNames: [
    // 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ]
};

function pad(val, len) {
  val = String(val);
  len = len || 2;
  while (val.length < len) {
    val = '0' + val;
  }
  return val;
}

/**
 * Get the ISO 8601 week number
 * Based on comments from
 * http://techblog.procurios.nl/k/n618/news/view/33796/14863/Calculate-ISO-8601-week-and-year-in-javascript.html
 *
 * @param  {Object} `date`
 * @return {Number}
 */
function getWeek(date) {
  // Remove time components of date
  var targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  // Change date to Thursday same week
  targetThursday.setDate(targetThursday.getDate() - ((targetThursday.getDay() + 6) % 7) + 3);

  // Take January 4th as it is always in week 1 (see ISO 8601)
  var firstThursday = new Date(targetThursday.getFullYear(), 0, 4);

  // Change date to Thursday same week
  firstThursday.setDate(firstThursday.getDate() - ((firstThursday.getDay() + 6) % 7) + 3);

  // Check if daylight-saving-time-switch occured and correct for it
  var ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
  targetThursday.setHours(targetThursday.getHours() - ds);

  // Number of weeks between target Thursday and first Thursday
  var weekDiff = (targetThursday - firstThursday) / (86400000*7);
  return 1 + Math.floor(weekDiff);
}

  /**
   * Get ISO-8601 numeric representation of the day of the week
   * 1 (for Monday) through 7 (for Sunday)
   * 
   * @param  {Object} `date`
   * @return {Number}
   */
function getDayOfWeek(date) {
  var dow = date.getDay();
  if(dow === 0) {
    dow = 7;
  }
  return dow;
}

  /**
   * kind-of shortcut
   * @param  {*} val
   * @return {String}
   */
function kindOf(val) {
  if (val === null) {
    return 'null';
  }

  if (val === undefined) {
    return 'undefined';
  }

  if (typeof val !== 'object') {
    return typeof val;
  }

  if (Array.isArray(val)) {
    return 'array';
  }
  //-WD
  return {}.toString.call(val)
    .slice(8, -1).toLowerCase();
};


function dateFormat() {
  'use strict'; //We should start doing this more often at POWr.
  var token = /([YyMmDdSsH]{1,4})|([Aaho])/g;
  // var token = /(YYYY)|(Y)|(YY)|(MMMM)|(MMM)|(MM)|(M)|(DDDD)|(DD)|(D)/g;
  var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
  var timezoneClip = /[^-+\dA-Z]/g;

  // Regexes and supporting functions are cached through closure
  return function (date, mask,utc,gmt) {
    // You can't provide utc if you skip other args (use the 'UTC:' mask prefix)
    if (arguments.length === 1 && kindOf(date) === 'string' && !/\d/.test(date)) {
      mask = date;
      date = undefined;
    }

    date = date || new Date;

    if(!(date instanceof Date)) {
      date = new Date(date);
    }

    if (isNaN(date)) {
      return new Date(date);
    }

    mask = String(dateFormat.masks[mask] || mask || dateFormat.masks['default']);

    // Allow setting the utc/gmt argument via the mask
    var maskSlice = mask.slice(0, 4);
    if (maskSlice === 'UTC:' || maskSlice === 'GMT:') {
      mask = mask.slice(4);
      if (maskSlice === 'GMT:') {
        gmt = true;
      }
    }


    // M                 1 2 ... 11 12
    // Mo                1st 2nd ... 11th 12th
    // MM                01 02 ... 11 12
    // MMM               Jan Feb ... Nov Dec
    // MMMM              January February ... November December
    // Q                 1 2 3 4                      #################NOT SUPPORTED
    // Qo                1st 2nd 3rd 4th              #################NOT SUPPORTED
    // D                 1 2 ... 30 31
    // Do                1st 2nd ... 30th 31st
    // DD                01 02 ... 30 31
    // DDD               1 2 ... 364 365
    // DDDo              1st 2nd ... 364th 365th
    // DDDD              001 002 ... 364 365
    // d                 0 1 ... 5 6
    // do                0th 1st ... 5th 6th
    // dd                Su Mo ... Fr Sa
    // ddd               Sun Mon ... Fri Sat
    // dddd              Sunday Monday ... Friday Saturday
    // (Locale) e        0 1 ... 5 6        #################NOT SUPPORTED
    // (ISO) E           1 2 ... 6 7
    // Week of Year w    1 2 ... 52 53
    // wo                1st 2nd ... 52nd 53rd
    // ww                01 02 ... 52 53
    // (ISO)  W          1 2 ... 52 53
    // Wo                1st 2nd ... 52nd 53rd
    // WW                01 02 ... 52 53
    // YY                70 71 ... 29 30
    // YYYY              1970 1971 ... 2029 2030 
    // Y                 1970 1971 ... 9999 +10000 +10001    #################NOT SUPPORTED
    // gg                70 71 ... 29 30
    // gggg              1970 1971 ... 2029 2030
    // (ISO) GG          70 71 ... 29 30
    // GGGG              1970 1971 ... 2029 2030
    // A                 AM PM
    // a                 am pm
    // H                 0 1 ... 22 23
    // HH                00 01 ... 22 23
    // h                 1 2 ... 11 12
    // hh                01 02 ... 11 12
    // k                 1 2 ... 23 24
    // kk                01 02 ... 23 24
    // m                 0 1 ... 58 59
    // mm                00 01 ... 58 59
    // s                 0 1 ... 58 59
    // ss                00 01 ... 58 59
    // S                 0 1 ... 8 9
    // SS                00 01 ... 98 99
    // SSS               000 001 ... 998 999
    // SSSS...SSSSSSSSS  000[0..] 001[0..] ... 998[0..] 999[0..]
    // z or zz           EST CST ... MST PST ############NOT SUPPORTED
    // Z                 -07:00 -06:00 ... +06:00 +07:00 ############NOT SUPPORTED
    // ZZ                -0700 -0600 ... +0600 +0700 ############NOT SUPPORTED
    // X                 1360013296 (Unix Timestamp)
    // x                 1360013296123 (Unix Millisecond Timestamp)




    var _ = true ? 'getUTC' : 'get';
    var D = date[_ + 'Date']();
    var d = date[_ + 'Day']();
    var M = date[_ + 'Month']();
    var Y = date[_ + 'FullYear']();
    var H = date[_ + 'Hours']();
    var m = date[_ + 'Minutes']();
    var s = date[_ + 'Seconds']();
    var L = date[_ + 'Milliseconds']();
    var o = utc ? 0 : date.getTimezoneOffset();
    var W = getWeek(date);
    var N = getDayOfWeek(date);
    var flags = {
      Q:    'TO BE IMPLEMENTED',
      Qo:   'TO BE IMPLEMENTED',
      Do:   ordinalSuffix(D),
      D:    D,
      DD:   pad(D),
      DDD:  'TO BE IMPLEMENTED',
      d:    d,
      dd:   pad(d),
      ddd:  dateFormat.i18n.dayNames[D],
      dddd: dateFormat.i18n.dayNames[D] + 'day', //Fri -> Friday,
      m:    m,
      mm:   pad(m),
      M:    M + 1,
      Mo:   ordinalSuffix(M + 1),
      MM:   pad(M + 1),
      MMM:  dateFormat.i18n.monthNames[M].slice(0,3), //January -> Jan
      MMMM: dateFormat.i18n.monthNames[M],
      YY:   String(Y).slice(2),
      yy:   String(Y).slice(2),
      yyyy: Y,
      YYYY: Y,
      h:    H % 12 || 12,
      hh:   pad(H % 12 || 12),
      H:    H,
      HH:   pad(H),
      M:    M,
      s:    s,
      ss:   pad(s),
      l:    pad(L, 3),
      L:    pad(Math.round(L / 10)),
      // t:    H < 12 ? 'a'  : 'p',
      // tt:   H < 12 ? 'am' : 'pm',
      // T:    H < 12 ? 'A'  : 'P',
      A:    H < 12 ? 'AM' : 'PM',
      a:    H < 12 ? 'AM' : 'PM',
      // Z:    gmt ? 'GMT' : utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),
      Z:    (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
      S:    ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10],
      W:    W,
      N:    N
    };
    return mask.replace(token, function (match) {
      if (match in flags) {
        return flags[match];
      }
      return match.slice(1, match.length - 1); //What.
    });
  };
};

module.exports = dateFormat();
