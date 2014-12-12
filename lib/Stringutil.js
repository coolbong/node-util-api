/**
 * Created by coobong on 2014-11-25.
 */

if (typeof String.prototype.chunk != 'function') {
    String.prototype.chunk = function (n) {
        var ret = [];
        for (var i = 0, len = this.length; i < len; i += n) {
            ret.push(this.substr(i, n))
        }
        return ret
    };
}

if (typeof String.prototype.toHexString != 'function') {
    String.prototype.toHexString = function () {
        return this.chunk(2).join(' ');
    };
}

//"{0}".format('hello') => "hello"
if (typeof String.prototype.format != 'function') {
    String.prototype.format = function() {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] != 'undefined' ? args[number] : match;
        });
    };
}

if (typeof String.prototype.startsWith != 'function') {
    String.prototype.startsWith = function (str){
        return this.slice(0, str.length) == str;
    };
}

if (typeof String.prototype.endsWith != 'function') {
    String.prototype.endsWith = function (str){
        return this.slice(-str.length) == str;
    };
}

if (typeof String.prototype.strip != 'function') {
    String.prototype.strip = function (){
        return this.replace(/\s+/g, '');
    };
}