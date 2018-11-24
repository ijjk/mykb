const fs = require('fs-extra')

// read and write to a json file
module.exports = function DB(file) {
  this.data = {}

  this.setData = function(data) {
    this.data = data
    return fs.writeFile(file, JSON.stringify(data, null, 2))
  }

  this.getData = function() {
    return this.data
  }

  this.loading = fs
    .readFile(file)
    .then(buf => {
      this.data = JSON.parse(buf.toString())
    })
    .catch(err => {
      console.error(err)
    })
}
