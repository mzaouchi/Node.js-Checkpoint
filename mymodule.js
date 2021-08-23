var fs = require('fs')

module.exports = function (rep, typeF, callback) {

  fs.readdir(rep, function (err, files) {
    if (err)
      return callback(err)

    files = files.filter(function (file) {
      return file.endsWith('.' + typeF)
    })

    callback(null, files)
  })
}