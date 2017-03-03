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
 * @param {string | buffer | number} value
 * @returns {number}
 */
function toNumber(value) {
    value = value || '';
    var str;
    if (Buffer.isBuffer(value)) {
        str = toHexString(value);
    } else if (typeof value === 'string') {
        str = strip(value)
    } else if (typeof value === 'number'){
        return value;
    } else {
        return 0;
    }

    return parseInt(str, 16);
}

function u1(buffer, offset, encoding) {
    encoding = encoding || 'hex';
    if (encoding === 'hex') {
        return toHexString(buffer[offset]);
    } else if (encoding == 'number') {
        return toNumber(toHexString(buffer.slice(offset, offset+2)));
    }
}

function u2(buffer, offset, encoding) {
    encoding = encoding || 'hex';
    if (encoding === 'hex') {
        return toHexString(buffer.slice(offset, offset+2));
    } else if (encoding === 'number') {
        return toNumber(toHexString(buffer.slice(offset, offset+2)));
    }
}

function un(buffer, offset, len, encoding) {
    encoding = encoding || 'hex';
    len = len || buffer.length;
    if (encoding === 'hex') {
        return toHexString(buffer.slice(offset, offset+len));
    } else if (encoding === 'number') {
        return toNumber(toHexString(buffer.slice(offset, offset+len)));
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
    toNumber: toNumber,
    strip: strip,
    u1: u1,
    u2: u2,
    un: un,
};

