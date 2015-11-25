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

        }
    }
};