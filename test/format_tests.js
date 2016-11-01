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

    it('Should print the A (AM/PM) format', function() {
        var formatString = 'A';
        var expected = 'AM';
        var coerced = sept5.format(formatString);
        expect(expected).to.equal(coerced);
    });

    it('Should print the A (AM/PM) format', function() { //Just an evening test
        var sept5String = '1990-09-05T23:01:01+00:00';
        var sept5 = momentlte(sept5String);

        var formatString = 'A';
        var expected = 'PM';
        var coerced = sept5.format(formatString);
        expect(expected).to.equal(coerced);
    });

    it('Should print the M format',function(){ //                 1 2 ... 11 12
        //Todo: finish this.
    });

    it('Should print the Mo format',function(){ //                1st 2nd ... 11th 12th
        //Todo: finish this.
    });

    it('Should print the MM format',function(){ //                01 02 ... 11 12
        //Todo: finish this.
    });

    it('Should print the MMM format',function(){ //               Jan Feb ... Nov Dec
        //Todo: finish this.
    });

    it('Should print the MMMM format',function(){ //              January February ... November December
        //Todo: finish this.
    });

    it('Should print the Q format',function(){ //                 1 2 3 4
        //Todo: finish this.
    });

    it('Should print the Qo format',function(){ //                1st 2nd 3rd 4th
        //Todo: finish this.
    });

    it('Should print the D format',function(){ //                 1 2 ... 30 31
        //Todo: finish this.
    });

    it('Should print the Do format',function(){ //                1st 2nd ... 30th 31st
        //Todo: finish this.
    });

    it('Should print the DD format',function(){ //                01 02 ... 30 31
        //Todo: finish this.
    });

    it('Should print the DDD (Day of Year) format',function(){ //         1 2 ... 364 365
        //Todo: finish this.
    });

    it('Should print the DDDo format',function(){ //              1st 2nd ... 364th 365th
        //Todo: finish this.
    });

    it('Should print the DDDD format',function(){ //              001 002 ... 364 365
        //Todo: finish this.
    });

    it('Should print the d format',function(){ //                 0 1 ... 5 6
        //Todo: finish this.
    });

    it('Should print the do format',function(){ //                0th 1st ... 5th 6th
        //Todo: finish this.
    });

    it('Should print the dd format',function(){ //                Su Mo ... Fr Sa
        //Todo: finish this.
    });

    it('Should print the ddd format',function(){ //               Sun Mon ... Fri Sat
        //Todo: finish this.
    });

    it('Should print the dddd format',function(){ //              Sunday Monday ... Friday Saturday
        //Todo: finish this.
    });

    it('Should print the e (Locale) format',function(){ //         0 1 ... 5 6  #################NOT SUPPORTED
        //Todo: finish this.
    });

    it('Should print the E (ISO) format',function(){ //            1 2 ... 6 7
        //Todo: finish this.
    });

    it('Should print the w (Week of Year) format',function(){ //     1 2 ... 52 53
        //Todo: finish this.
    });

    it('Should print the wo format',function(){ //                1st 2nd ... 52nd 53rd
        //Todo: finish this.
    });

    it('Should print the ww format',function(){ //                01 02 ... 52 53
        //Todo: finish this.
    });

    it('Should print the W (ISO) format',function(){ //            1 2 ... 52 53
        //Todo: finish this.
    });

    it('Should print the Wo format',function(){ //                1st 2nd ... 52nd 53rd
        //Todo: finish this.
    });

    it('Should print the WW format',function(){ //                01 02 ... 52 53
        //Todo: finish this.
    });

    it('Should print the YY format',function(){ //                70 71 ... 29 30
        //Todo: finish this.
    });

    it('Should print the YYYY format',function(){ //              1970 1971 ... 2029 2030
        //Todo: finish this.
    });

    it('Should print the Y format',function(){ //                 1970 1971 ... 9999 +10000 +10001 
        //Todo: finish this.
    });

    it('Should print the gg format',function(){ //                70 71 ... 29 30
        //Todo: finish this.
    });

    it('Should print the gggg format',function(){ //              1970 1971 ... 2029 2030
        //Todo: finish this.
    });

    it('Should print the GG (ISO) format',function(){ //           70 71 ... 29 30
        //Todo: finish this.
    });

    it('Should print the GGGG format',function(){ //              1970 1971 ... 2029 2030
        //Todo: finish this.
    });

    it('Should print the A format',function(){ //                 AM PM
        //Todo: finish this.
    });

    it('Should print the a format',function(){ //                 am pm
        //Todo: finish this.
    });

    it('Should print the H format',function(){ //                 0 1 ... 22 23
        //Todo: finish this.
    });

    it('Should print the HH format',function(){ //                00 01 ... 22 23
        //Todo: finish this.
    });

    it('Should print the h format',function(){ //                 1 2 ... 11 12
        //Todo: finish this.
    });

    it('Should print the hh format',function(){ //                01 02 ... 11 12
        //Todo: finish this.
    });

    it('Should print the k format',function(){ //                 1 2 ... 23 24
        //Todo: finish this.
    });

    it('Should print the kk format',function(){ //                01 02 ... 23 24
        //Todo: finish this.
    });

    it('Should print the m format',function(){ //                 0 1 ... 58 59
        //Todo: finish this.
    });

    it('Should print the mm format',function(){ //                00 01 ... 58 59
        //Todo: finish this.
    });

    it('Should print the s format',function(){ //                 0 1 ... 58 59
        //Todo: finish this.
    });

    it('Should print the ss format',function(){ //                00 01 ... 58 59
        //Todo: finish this.
    });

    it('Should print the S format',function(){ //                 0 1 ... 8 9
        //Todo: finish this.
    });

    it('Should print the SS format',function(){ //                00 01 ... 98 99
        //Todo: finish this.
    });

    it('Should print the SSS format',function(){ //               000 001 ... 998 999
        //Todo: finish this.
    });

    it('Should print the SSSS...SSSSSSSSS format',function(){ //  000[0..] 001[0..] ... 998[0..] 999[0..]
        //Todo: finish this.
    });

    it('Should print the z or zz format',function(){ //            EST CST ... MST PST ############NOT SUPPORTED
        //Todo: finish this.
    });

    it('Should print the Z format',function(){ //                 -07:00 -06:00 ... +06:00 +07:00 ############NOT SUPPORTED
        //Todo: finish this.
    });

    it('Should print the ZZ format',function(){ //                -0700 -0600 ... +0600 +0700 ############NOT SUPPORTED
        //Todo: finish this.
    });

    it('Should print the X format',function(){ //                 1360013296 (Unix Timestamp)
        //Todo: finish this.
    });

    it('Should print the x format',function(){ //                 1360013296123 (Unix Millisecond Timestamp)
        //Todo: finish this.
    });

    
});