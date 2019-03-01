const { parseShortVolume } = require('./parser')
const t = require('tap')

const mockCsv = `Date|Symbol|ShortVolume|ShortExemptVolume|TotalVolume|Market
20190228|A|7069|0|22738|N
20190228|AA|256440|0|497845|N
20190228|AAAU|523|0|625|N
20190228|AABA|5966|0|28500|N
732832
`
const [first] = parseShortVolume(mockCsv)
t.similar(first, {
  Date: new Date('2019-02-28'),
  Symbol: 'A',
  ShortVolume: 7069,
  ShortExemptVolume: 0,
  TotalVolume: 22738,
  Market: 'N'
})
