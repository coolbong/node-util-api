/**
 * Created by coobong on 2014-11-24.
 */
var StringUtil = require('./Stringutil');

function toHex(/*number or Buffer*/d) {
    if(d instanceof Number) {
        return ("0" + (Number(d).toString(16))).slice(-2).toUpperCase();
    } else if(d instanceof Buffer) {
        return d.toString('hex').toUpperCase().toHexString();
    }

}

function toBinary(/*number*/d) {
    return ("0000000" + (Number(d).toString(2))).slice(-8).toUpperCase();
}

function toBuffer(/*hexa string*/ str) {
    var tmp  = str.replace(/\s+/g, '');
    return new Buffer(tmp, 'hex');
}


module.exports = {
    toHex: toHex,
    toBinary: toBinary,
    toBuffer: toBuffer,
};

function main(){
    var buff = new Buffer(10);
    buff.fill(0);
    console.log(toHex(buff));
}

main();