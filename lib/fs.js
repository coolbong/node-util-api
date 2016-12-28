/**
 * Created by coolbong on 2015-05-28.
 */


var fs = require('fs');
var path = require('path');
var readline = require('readline');

//FIXME handle korean character
//TODO rmdir with subdirectory

/*sync*/
var getFiles = function(dir, extention, files_) {
    files_ = files_ || [];


    var files = fs.readdirSync(dir);
    for(var i in files){
        if (!files.hasOwnProperty(i)) continue;
        var name = dir+'/'+files[i];
        if (fs.statSync(name).isDirectory()){
            getFiles(name, extention, files_);
        } else {
            if (extention) {
                var ext = path.extname(name);
                if ((ext) && extention.indexOf(ext) !== -1) {
                    files_.push(name);
                }
            } else {
                files_.push(name);
            }
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
 * @param {string| string[]} str
 * @param {number} [tab]
 */
createFile.prototype.println = function(str, tab) {
    var fd = this.fd;
    var t = '';
    var i;
    if(tab !== undefined) {
        for(i=0; i<tab; i++) {
            t += '\t';
        }
    }

    str = str || '';

    // caution array make big string
    if (Array.isArray(str)) {
        //str.join('\r\n');
        for (i=0; i<str.length; i++) {
            str[i] = t + str[i];
        }
        fd.write(str.join('\r\n'));
    } else {
        fd.write(t + str + '\r\n');
    }
};

/**
 *
 * @param {string} str
 * @param {number} [tab]
 */
createFile.prototype.print = function(str, tab) {
    var fd = this.fd;
    var t = '';
    var i;
    if(tab !== undefined) {
        for(i=0; i<tab; i++) {
            t += '\t';
        }
    }
    str = str || '';
    // caution array make big string
    if (Array.isArray(str)) {
        //str.join('\r\n');
        for (i=0; i<str.length; i++) {
            str[i] = t + str[i];
        }
        fd.write(str.join('\r\n'));
    } else {
        fd.write(t + str);
    }
};

createFile.prototype.log = function(str) {
    console.log(str);
    this.fd.write(str + '\r\n');
    //this.fd.write('\r\n');
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