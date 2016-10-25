var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var momentlte = require('../lib/momentlte.js');



var sept5String = '1990-09-05T00:00:00+00:00';
var sept5;


describe('adding and subtracting',function(){
    beforeEach(function() {
        sept5 = momentlte(sept5String);
      // runs before each test in this block
    });
    describe('adding', function() {
        it('Should handle adding seconds.', function() {
            var expectedIsoString = '1990-09-05T00:00:01Z';
            var newIsoString = sept5.add(1,'second').toISOString();
            expect(newIsoString).to.equal(expectedIsoString);

        });
        it('Should handle adding minutes.', function() {
            var expectedIsoString = '1990-09-05T00:01:00Z';
            var newIsoString = sept5.add(1,'minute').toISOString();
            expect(newIsoString).to.equal(expectedIsoString);
        });
        it('Should handle adding hours.', function() {
            var expectedIsoString = '1990-09-05T01:00:00Z';
            var newIsoString = sept5.add(1,'hour').toISOString();
            expect(newIsoString).to.equal(expectedIsoString);
        });
        it('Should handle adding days.', function() {
            var expectedIsoString = '1990-09-06T00:00:00Z';
            var newIsoString = sept5.add(1,'day').toISOString();
            expect(newIsoString).to.equal(expectedIsoString);
        });
        it('Should handle adding weeks.', function() {
            var expectedIsoString = '1990-09-12T00:00:00Z';
            var newIsoString = sept5.add(1,'week').toISOString();
            expect(newIsoString).to.equal(expectedIsoString);
        });
        it('Should handle adding years.', function() {
            var expectedIsoString = '1991-09-05T00:00:00Z';
            var newIsoString = sept5.add(1,'year').toISOString();
            expect(newIsoString).to.equal(expectedIsoString);
        });
    });

    describe('subtracting', function() {

        it('Should handle subtracting seconds.', function() {
            var expectedIsoString = '1990-09-04T23:59:59Z';
            var newIsoString = sept5.minus(1,'second').toISOString();
            expect(newIsoString).to.equal(expectedIsoString);
        });

        it('Should handle subtracting minutes.', function() {
            var expectedIsoString = '1990-09-04T23:59:00Z';
            var newIsoString = sept5.minus(1,'minute').toISOString();
            expect(newIsoString).to.equal(expectedIsoString);
        });

        it('Should handle subtracting hours.', function() {
            var expectedIsoString = '1990-09-04T23:00:00Z';
            var newIsoString = sept5.minus(1,'hour').toISOString();
            expect(newIsoString).to.equal(expectedIsoString);
        });

        it('Should handle subtracting days.', function() {
            var expectedIsoString = '1990-09-04T00:00:00Z';
            var newIsoString = sept5.minus(1,'day').toISOString();
            expect(newIsoString).to.equal(expectedIsoString);
        });

        it('Should handle subtracting weeks.', function() {
            var expectedIsoString = '1990-08-29T00:00:00Z';
            var newIsoString = sept5.minus(1,'week').toISOString();
            expect(newIsoString).to.equal(expectedIsoString);
        });

        it('Should handle subtracting years.', function() {
            var expectedIsoString = '1989-09-05T00:00:00Z';
            var newIsoString = sept5.minus(1,'year').toISOString();
            expect(newIsoString).to.equal(expectedIsoString);
        });
    });
});