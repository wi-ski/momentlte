var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var momentlte = require('../lib/momentlte.js');


var sept5String = '1990-09-05T01:01:01+00:00';
var sept5;

describe('Format',function(){
    beforeEach(function() {
        sept5 = momentlte(sept5String);
      // runs before each test in this block
    });

    it('Should print the ISO8601 format', function() {
        var _zCase1 = '1990-09-05T00:00:00Z';
        var zCase1 = momentlte(_zCase1);
        var coerced1 = zCase1.toISOString();
        expect(coerced1).to.equal(_zCase1); //'September 5 should be the same no matter what'
    });
    it('Should print the YYYY-MM-DD format', function() {
        var _zCase1 = '1990-09-05';
        var zCase1 = momentlte(_zCase1);
        var coerced1 = zCase1.format('YYYY-MM-DD');
        expect(coerced1).to.equal(_zCase1); //'September 5 should be the same no matter what'
    });

      // var zCase4 = '17:41:11'; //Should default to "now"
});