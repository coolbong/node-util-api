/**
 * Created by coolbong on 2015-11-25.
 */


require('../index');
var assert = require('assert');


exports.predefined = {
    'number': {
        'toBuffer': function () {
            var num = 128;
            var buffer = num.toBuffer();
            assert('80' == buffer.toHexString());


            num = 65535;
            buffer = num.toBuffer();
            //console.log(buffer.toHexString());
            assert('FFFF' == buffer.toHexString());
        },
        'toHexString': function() {

        }
    },
    'string' : {
        'chunk' : function() {

        },
        'fill' :  {
            'fill right 1' : function() {
                var str = '241234';
                var result = str.fill(8);
                var answer = '24123400000000';
                assert (answer == result);
            },
            'fill right 2' : function() {
                var str = '241234';
                var result = str.fill(8, 'f');
                var answer = '241234ffffffff';
                assert (answer == result);
            },
            'fill right 3' : function() {
                var str = '241234';
                var result = str.fill(8, 0, true);
                var answer = '00000000241234';
                assert (answer == result);
            }
        }
    }
};