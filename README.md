# spell-mongoose

Summon spells for connecting to databases and creating schemas.

## Installation

```sh
npm i --save-dev cogwizzle/spell-mongoose
```

## Spells

_gereateMongooseModel_

Creates a mongoose model based on a JSON description of the model.

```js
spellbook.generateMongooseModel('car', {
  make: 'String',
  model: 'String',
  year: 'Number',
})
```

_setupConnection_

Adds code to set up the mongo db connection (for localhost) in any file and will add the import. It uses token `:import:` and `:connection:` to insert the import and connection code.

```js
spellbook.setupConnection('testdb', './app.js')
```
