/**
 * Created by coolbong on 2015-05-28.
 */


var fs = require('fs');
var path = require('path');
var readline = require('readline');

//FIXME handle korean character
//TODO getfiles with file extention
//TODO rmdir with subdirectory

/*sync*/
var getFiles = function(dir, files_) {
    files_ = files_ || [];
    if (typeof files_ === 'undefined') files_=[];
    var files = fs.readdirSync(dir);
    for(var i in files){
        if (!files.hasOwnProperty(i)) continue;
        var name = dir+'/'+files[i];
        if (fs.statSync(name).isDirectory()){
            getFiles(name,files_);
        } else {
            files_.push(name);
        }
    }
    return files_;
};


/* only relative path */
var mkdir = function(dir) {
    var arr = dir.split('/');
    var tmp = './';

    for(var i=0; i<arr.length; i++) {
        tmp += arr[i] + '/';
        if(fs.existsSync(tmp) == false) {
            fs.mkdirSync(tmp);
        }
    }
};

/* sync */
var readFile = function(filename) {
    return fs.readFileSync(filename, 'utf8');
}

function createFile(name){
    if (!(this instanceof createFile)) {
        return new createFile(name);
    }
    var dir = path.dirname(name);
    mkdir(dir);
    this.fd = fs.createWriteStream(name);
};


/**
 *
 * @param {string} str
 * @param {number} [tab]
 */
createFile.prototype.println = function(str, tab) {
    if(tab !== undefined) {
        for(var i=0; i<tab; i++) {
            this.fd.write('\t');
        }
    }

    this.fd.write(str);
    this.fd.write('\r\n');
};

/**
 *
 * @param {string} str
 * @param {number} [tab]
 */
createFile.prototype.print = function(str, tab) {
    if(tab !== undefined) {
        for(var i=0; i<tab; i++) {
            this.fd.write('\t');
        }
    }

    this.fd.write(str);
};

createFile.prototype.end = function(str) {
    this.fd.end(str);
};


module.exports = {
    createFile: createFile,
    mkdir: mkdir,
    getFiles: getFiles,
    readFile: readFile
};