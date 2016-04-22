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

module.exports = {
    toBinary: toBinary,
    prettyJSON: prettyJSON,
    mkdir : fsutil.mkdir,
    getFiles : fsutil.getFiles,
    createFile : fsutil.createFile,
    readFile : fsutil.readFile,
    toHexString: toHexString
};

