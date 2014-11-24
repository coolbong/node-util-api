/**
 * Created by coobong on 2014-11-24.
 */


function toHex(d) {
    return ("0" + (Number(d).toString(16))).slice(-2).toUpperCase();
}

function toBinary(d) {
    return ("000" + (Number(d).toString(2))).slice(-8).toUpperCase();
}



module.exports = {
    toHex: toHex,
    toBinary: toBinary
};