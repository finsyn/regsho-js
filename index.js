const { fetchShortVolume } = require('./finra-api')
const { parseShortVolume } = require('./parser')
const { then, pipe } = require('ramda')

module.exports = pipe(
  fetchShortVolume,
  then(parseShortVolume)
)
