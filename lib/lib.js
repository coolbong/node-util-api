/**
 * Created by coolbong on 2014-11-24.
 */


require('./predefined');
var fsutil = require('./fs');


function toBinary(/*number*/d) {
    return ("0000000" + (Number(d).toString(2))).slice(-8).toUpperCase();
}

function prettyJSON(obj) {
    console.log(JSON.stringify(obj, null, 2));
}

/**
 * convert to hex string
 *
 * @param {number | Buffer} num
 * @returns {string}
 */
function toHexString(data) {
    if (Buffer.isBuffer(data)) {
        return data.toString('hex').toUpperCase();
    } else if (typeof data === 'string') {
        return data;
    } else if (typeof  data === 'number') {
        //number
        var h = data.toString(16).toUpperCase();
        if ((h.length & 1) == 1) {
            h = '0' + h;
        }
        return h;
    } else {
        return '';
    }
}


/**
 *
 * @param {number | string | Buffer} data
 * @returns {Buffer}
 */
function toBuffer(data) {
    if (Buffer.isBuffer(data)) {
        return data;
    } else if (typeof data === 'string') {
        data = strip(data);
        return new Buffer(data, 'hex');
    } else if (typeof data == 'number') {
        var h = data.toString(16).toUpperCase();
        if ((h.length & 1) == 1) {
            h = '0' + h;
        }
        return new Buffer(h, 'hex');
    } else {
        return new Buffer();
    }
}


/**
 *
 * @param {string | buffer | number} val
 * @returns {number}
 */
function toNumber(val) {
    if (Buffer.isBuffer(val)) {
        return val[0]
    } else if (typeof val === 'string') {
        return parseInt(val, 16);
    } else if (typeof val === 'number') {
        return val;
    } else {
        return 0;
    }
}

function strip(str) {
    str = str || '';
    return str.replace(/\s+/g, '');
}

module.exports = {
    toBinary: toBinary,
    prettyJSON: prettyJSON,
    mkdir : fsutil.mkdir,
    getFiles : fsutil.getFiles,
    createFile : fsutil.createFile,
    readFile : fsutil.readFile,
    toHexString: toHexString,
    toBuffer: toBuffer,
    strip: strip
};

