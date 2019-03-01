const parse = require('csv-parse/lib/sync')
const { tap, identity, constructN, splitAt, join, pipe, curry, __ } = require('ramda')

const casters = {
  'Date': pipe(
    splitAt(4),
    join('-'),
    splitAt(7),
    join('-'),
    constructN(1, Date)
  ),
  'Symbol': identity,
  'ShortVolume': constructN(1, Number),
  'ShortExemptVolume': constructN(1, Number),
  'TotalVolume': constructN(1, Number),
  'Market': identity 
}
const parseShortVolume = data => parse(data, { 
  columns: true,
  cast: (value, { column }) => casters[column] ? casters[column](value) : value,
  delimiter: '|',
  relax_column_count: true
})

module.exports = {
  parseShortVolume
}
