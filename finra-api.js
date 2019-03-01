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

// { date, market } -> Promise(ShortVolume[])
const fetchShortVolume = pipe(
  toFinraAttr,
  ({ date, market }) => axios({
    url: `${origin}/${market}shvol${date}.txt`,
    method: 'GET'
  }),
  then(prop('data'))
)

module.exports = {
  toFinraAttr,
  fetchShortVolume
}
