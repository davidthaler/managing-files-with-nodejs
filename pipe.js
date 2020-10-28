const {createReadStream, createWriteStream} = require('fs')

const reader = createReadStream('./data/app.log', {encoding: 'utf8'})
const writer = createWriteStream('./data/output.log')
reader.pipe(writer)