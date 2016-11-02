var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var momentlte = require('../lib/momentlte.js');
var offsetFix = require('../lib/offsetFix.js');


var sept5String = '1990-09-05T00:00:00';
var sept5;



describe('offsetFix',function(){
    beforeEach(function() {
        sept5 = momentlte(sept5String);
      // runs before each test in this block
    });
    describe('locale string', function() {
        it('return a "locale" string', function() {
            [
                {minutes:0,expected:"+00:00"},
                {minutes:-0,expected:"+00:00"},
                {minutes:420,expected:"-07:00"},
                {minutes:345,expected:"-05:45"},
                {minutes:330,expected:"-05:30"},
                {minutes:-420,expected:"+07:00"},
                {minutes:-345,expected:"+05:45"},
                {minutes:-330,expected:"+05:30"}

            ].forEach(function(_case){
                var numMinutes = _case.minutes;
                var actual = offsetFix(numMinutes);
                expect(_case.expected).to.equal(actual);
            })
            // var newIsoString = sept5.toLocaleISOString();
        });

    });
});