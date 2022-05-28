const { pascalCase } = require('pascal-case')

module.exports = (modelName, properties) =>
  `const mongoose = require('mongoose')
const { Schema } = mongoose
const schema = new Schema({
  ${Object.entries(properties)
    .map(([key, value]) => `${key}: ${value}`)
    .join(',\n  ')}
})

module.exports = mongoose.model('${pascalCase(modelName)}', schema)`
