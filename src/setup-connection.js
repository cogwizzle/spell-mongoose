module.exports = (dbName, fileName) => {
  const fs = require('fs')
  const content = fs
    .readFileSync(fileName, 'utf8')
    .replace(':import:', 'const mongoose = require("mongoose");')
    .replace(
      ':connection:',
      `mongoose.connect("mongodb://localhost/${dbName}").then(() => {`
    )
    .replace(':endConnection:', '})')
  fs.writeFileSync(fileName, content)
}
