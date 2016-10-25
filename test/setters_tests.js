var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var momentlte = require('../lib/momentlte.js');

var sept5String = '1990-09-05T00:00:00+00:00';
var sept5;

describe('setters',function(){
    beforeEach(function() {
        sept5 = momentlte(sept5String);
      // runs before each test in this block
    });
    it('Should handle setting the year.', function() {
        var expectedValue = '1991-09-05T00:00:00Z';
        sept5.year(1991);
        var value = sept5.toISOString();
        expect(value).to.equal(expectedValue);
    });
    it('Should handle setting the month.', function() {
        var expectedValue = '1990-11-05T00:00:00Z'; //? What
        sept5.month(10);
        var value = sept5.toISOString();
        expect(value).to.equal(expectedValue);
    });
    it('Should handle setting the date.', function() {
        var expectedValue = '1990-09-06T00:00:00Z';
        sept5.date(6);
        var value = sept5.toISOString();
        expect(value).to.equal(expectedValue);
    });
    it('Should handle setting the hour.', function() {
        var expectedValue = '1990-09-05T01:00:00Z';
        sept5.hour(1);
        var value = sept5.toISOString();
        expect(value).to.equal(expectedValue);
    });
    it('Should handle setting the minute.', function() {
        var expectedValue = '1990-09-05T00:01:00Z';
        sept5.minute(1);
        var value = sept5.toISOString();
        expect(value).to.equal(expectedValue);
    });
    it('Should handle setting the second.', function() {
        var expectedValue = '1990-09-05T00:00:01Z';
        sept5.second(1);
        var value = sept5.toISOString();
        expect(value).to.equal(expectedValue);
    });
    // it('Should handle setting the millisecond.', function() { //dont want to handle atm
    //     var expectedValue = '1990-09-05T00:00:00+00:00';
    //     var value = sept5.millisecond();
    //     expect(value).to.equal(expectedValue);
    // });

});