var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var momentlte = require('../lib/momentlte.js');

var sept5String = '1990-09-05T01:01:01+00:00';
var sept5;

describe('getters',function(){
    beforeEach(function() {
        sept5 = momentlte(sept5String);
      // runs before each test in this block
    });
    it('Should handle getting year.', function() {
        var expectedValue = 1990;
        var value = sept5.year();
        expect(value).to.equal(expectedValue);
    });
    it('Should handle getting month.', function() {
        var expectedValue = 8;
        var value = sept5.month();
        expect(value).to.equal(expectedValue);
    });
    it('Should handle getting date.', function() {
        var expectedValue = 5;
        var value = sept5.date();
        expect(value).to.equal(expectedValue);
    });
    it('Should handle getting hour.', function() {
        var expectedValue = 1;
        var value = sept5.hour();
        expect(value).to.equal(expectedValue);
    });
    it('Should handle getting minute.', function() {
        var expectedValue = 1;
        var value = sept5.minute();
        expect(value).to.equal(expectedValue);
    });
    it('Should handle getting second.', function() {
        var expectedValue = 1;
        var value = sept5.second();
        expect(value).to.equal(expectedValue);
    });
    it('Should handle getting millisecond.', function() {
        var expectedValue = 0;
        var value = sept5.millisecond();
        expect(value).to.equal(expectedValue);
    });

});