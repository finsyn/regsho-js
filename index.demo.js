const fetchShortVolume = require('./index')

fetchShortVolume({
  date: '2019-02-28',
  market: 'NYSE'
})
  .then(console.log)
  .catch(console.error)
