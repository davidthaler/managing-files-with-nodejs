const { convertCsv } = require('./csv.parse')
const { readFileSync } = require('fs')

const data = readFileSync('./data/pulitzer-circulation-data.csv', 'utf8')
console.table(convertCsv(data))