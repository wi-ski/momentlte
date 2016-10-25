var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var momentlte = require('../lib/momentlte.js');



describe('Parsing', function() {
    //simple indentity test
    it('It should handle simple date object', function() {
      var _zCase0 = new Date;
      var zCase0 = momentlte(_zCase0);
      var coerced0 = +zCase0;
      expect(coerced0).to.equal(+_zCase0)
    });

    it('It should handle all types of "Z"ero cases', function() {
      var _zCase1 = '1990-09-05T00:00:00+00:00';
      var zCase1 = momentlte(_zCase1);
      var coerced1 = +zCase1;
      expect(coerced1).to.equal(652492800000); //'September 5 should be the same no matter what'
    });

    it('It should handle all types of "Z"ero cases', function() {
      var _zCase2 = '1990-09-05T00:00:00Z';
      var zCase2 = momentlte(_zCase2);
      var coerced2 = +zCase2;
      expect(coerced2).to.equal(652492800000); //'September 5 should be the same no matter what'
    });

    it('It should handle all types of "Z"ero cases', function() {
      var _zCase3 = '1990-09-05';
      var zCase3 = momentlte(_zCase3);
      var coerced3 = +zCase3;
      expect(coerced3).to.equal(652492800000); //'September 5 should be the same no matter what'
    });
      // var zCase4 = '17:41:11'; //Should default to "now"
});