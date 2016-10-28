var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var momentlte = require('../lib/momentlte.js');


var sept5String = '1990-09-05T01:01:01+00:00';
var sept5 = null;

describe('Format',function(){
    beforeEach(function() {
        sept5 = momentlte(sept5String);
      // runs before each test in this block
    });

    it('Should print the ISO8601 format', function() {
        var expected = '1990-09-05T01:01:01Z';
        var actual = sept5.toISOString();
        expect(expected).to.equal(actual); //'September 5 should be the same no matter what'
    });

    it('Should print the YYYY-MM-DD format', function() {
        var formatString = 'YYYY-MM-DD';
        var expected = '1990-09-05';
        var coerced = sept5.format(formatString);
        expect(expected).to.equal(coerced); //'September 5 should be the same no matter what'
    });

    it('Should print the MM-DD-YYYY format', function() {
        var formatString = 'MM-DD-YYYY';
        var expected = '09-05-1990';
        var coerced = sept5.format(formatString);
        expect(expected).to.equal(coerced); //'September 5 should be the same no matter what'
    });

    it('Should print the DD-MM-YYYY format', function() {
        var formatString = 'DD-MM-YYYY';
        var expected = '05-09-1990';
        var coerced = sept5.format(formatString);
        expect(expected).to.equal(coerced); //'September 5 should be the same no matter what'
    });
    // M                 1 2 ... 11 12
    // Mo                1st 2nd ... 11th 12th
    // MM                01 02 ... 11 12
    // MMM               Jan Feb ... Nov Dec
    // MMMM              January February ... November December
    // Q                 1 2 3 4
    // Qo                1st 2nd 3rd 4th
    // D                 1 2 ... 30 31
    // Do                1st 2nd ... 30th 31st
    // DD                01 02 ... 30 31
    // Day of Year       DDD 1 2 ... 364 365
    // DDDo              1st 2nd ... 364th 365th
    // DDDD              001 002 ... 364 365
    // d                 0 1 ... 5 6
    // do                0th 1st ... 5th 6th
    // dd                Su Mo ... Fr Sa
    // ddd               Sun Mon ... Fri Sat
    // dddd              Sunday Monday ... Friday Saturday
    // (Locale) e        0 1 ... 5 6  #################NOT SUPPORTED
    // (ISO) E           1 2 ... 6 7
    // Week of Year w    1 2 ... 52 53
    // wo                1st 2nd ... 52nd 53rd
    // ww                01 02 ... 52 53
    // (ISO)  W          1 2 ... 52 53
    // Wo                1st 2nd ... 52nd 53rd
    // WW                01 02 ... 52 53
    // YY                70 71 ... 29 30
    // YYYY              1970 1971 ... 2029 2030
    // Y                 1970 1971 ... 9999 +10000 +10001 
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
    
});