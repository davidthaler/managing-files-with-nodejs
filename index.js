module.exports.asynchronousRead = require('./read/asynchronous.read.').read
module.exports.awaitRead = require('./read/await.read.').read
module.exports.chunkReadAsync = require('./read/chunk.read.async.').read
module.exports.partialReadAsync = require('./read/partial.read.async.').read
module.exports.partialReadSync = require('./read/partial.read.sync.').read
module.exports.promiseRead = require('./read/promise.read.').read
module.exports.synchronousRead = require('./read/synchronous.read.').read
