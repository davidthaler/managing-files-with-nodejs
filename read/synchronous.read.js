const { convertCsv } = require('./csv.parse')
const { readFileSync } = require('fs')

module.exports.read = () => {
    const data = readFileSync('./data/pulitzer-circulation-data.csv', 'utf8')
    console.table(convertCsv(data))
}
