var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var momentlte = require('../lib/momentlte.js');



describe('Format', function() {
    //simple indentity test
    it('Should print the ISO8601 format', function() {
        var _zCase1 = '1990-09-05T00:00:00+00:00';
        var zCase1 = momentlte(_zCase1);
        var coerced1 = zCase1.toISOString();
        expect(coerced1).to.equal(_zCase1); //'September 5 should be the same no matter what'
    });
      // var zCase4 = '17:41:11'; //Should default to "now"
});