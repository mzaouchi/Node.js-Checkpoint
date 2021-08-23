var fs = require("fs");

fs.readdir(process.argv[2],function(err, files) {
    if (err) {
       return console.error(err);
    }
    files.forEach( function (file) {
       file.endsWith('.'+process.argv[3]) && console.log( file );
    });
    // console.log(files.filter(el=>el.endsWith('.'+process.argv[3])).map(el=>console.log(el)))
 });