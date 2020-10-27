const { convertCsv } = require('./csv.parse')
const { readFile } = require('fs')

module.exports.read = () => {
    readFile('./data/pulitzer-circulation-data.csv', 'utf8', (err, data) => {
        if (err) {
            console.log(`Error: ${err}`)
            return
        }

        const vals = convertCsv(data)
        console.table(vals)
    })
}
