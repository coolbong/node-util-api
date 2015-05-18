/**
 * Created by coobong on 2014-11-24.
 */
var StringUtil = require('./Stringutil');

/*
function toHex(d) {
    if(typeof d == 'number') {
        return ("0" + (Number(d).toString(16))).slice(-2).toUpperCase();
    } else if(d instanceof Buffer) {
        return d.toString('hex').toUpperCase().toHexString();
    }
}
*/

function toBinary(/*number*/d) {
    return ("0000000" + (Number(d).toString(2))).slice(-8).toUpperCase();
}

function toBuffer(/*hexa string*/ str) {
    var tmp  = str.replace(/\s+/g, '');
    return new Buffer(tmp, 'hex');
}

function prettyJSON(obj) {
    console.log(JSON.stringify(obj, null, 2));
}

module.exports = {
    toBinary: toBinary,
    toBuffer: toBuffer,
    prettyJSON: prettyJSON
};

