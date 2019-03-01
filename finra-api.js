const axios = require('axios')
const { then, evolve, prop, __, replace, pipe } = require('ramda')

const origin = 'http://regsho.finra.org'

const marketTranslations = {
  'NYSE': 'FNYX',
  'NASDAQ': 'FNSQ'
}

// { date, market } -> { date, market } 
const toFinraAttr = evolve({
  date: replace(/-/g,''),
  market: prop(__, marketTranslations)
})

const toFinraUrl = pipe(
  toFinraAttr,
  ({ market, date }) => `${origin}/${market}shvol${date}.txt`
)

// { date, market } -> Promise(ShortVolume[])
const fetchShortVolume = pipe(
  toFinraUrl,
  url => axios.get(url),
  then(prop('data'))
)

module.exports = {
  toFinraUrl,
  fetchShortVolume
}
