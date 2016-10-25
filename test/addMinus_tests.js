var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var momentlte = require('../lib/momentlte.js');



var sept5String = '1990-09-05T00:00:00+00:00';
var sept5;
describe('adding and subtracting', function() {
    beforeEach(function() {
        sept5 = momentlte(sept5String);
      // runs before each test in this block
    });
    it('Should handle adding seconds.', function() {
        var expectedIsoString = '1990-09-05T00:00:01+00:00';
        var newIsoString = sept5.add(1,'second').toISOString();
        expect(newIsoString).to.equal(expectedIsoString);

    });
    // it('Should handle adding minutes.', function() {

    // });
    // it('Should handle adding hours.', function() {

    // });
    // it('Should handle adding days.', function() {

    // });
    // it('Should handle adding weeks.', function() {

    // });
    // it('Should handle adding years.', function() {

    // });
    // var _zCase1 = ;
    // var zCase1 = momentlte(_zCase1);
    // var coerced1 = zCase1.toISOString();
    // expect(coerced1).to.equal(_zCase1); //'September 5 should be the same no matter what'
    // var zCase4 = '17:41:11'; //Should default to "now"
});