const parse = require('csv-parse/lib/sync')
const { tap, identity, constructN, splitAt, join, pipe, curry, __, dropLast,
        multiply } = require('ramda')

const casters = {
  'Date': pipe(
    splitAt(4),
    join('-'),
    splitAt(7),
    join('-'),
    constructN(1, Date)
  ),
  'Symbol': identity,
  'ShortVolume': multiply(1),
  'ShortExemptVolume': multiply(1),
  'TotalVolume': multiply(1),
  'Market': identity 
}

const parseShortVolume = pipe(
  data => parse(data, { 
    columns: true,
    cast: (value, { column }) => casters[column] ? casters[column](value) : value,
    delimiter: '|',
    relax_column_count: true
  }),
  // last one is just a count number?
  dropLast(1)
)

module.exports = {
  parseShortVolume
}
