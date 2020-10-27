const { convertCsv } = require('./csv.parse')
const fs = require('fs')
const { promisify } = require('util')

module.exports.read = () => {
    const readFile = promisify(fs.readFile)

    const readUTF8 = async (filename) => {
        try {
            const data = await readFile(filename, 'utf8')
        } catch (err) {
            console.log(`FUBAR!!! : ${err}`)
        }

        console.table(convertCsv(data))
    }

    readUTF8('./data/pulitzer-circulation-data.cs')
}
