module.exports = (spellbook) => {
  spellbook.generateMongooseModel = require('./src/generate-mongoose-model')
  spellbook.setupConnection = require('./src/setup-connection')
}
