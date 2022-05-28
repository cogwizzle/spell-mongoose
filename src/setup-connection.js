module.exports = (dbName, fileName) => {
  const fs = require('fs')
  const content = fs
    .readFileSync(fileName, 'utf8')
    .replace(':import:', 'const mongoose = require("mongoose");')
    .replace(
      ':connection:',
      `mongoose.connect("mongodb://127.0.0.1:27017/${dbName}")`
    )
  fs.writeFileSync(fileName, content)
}
