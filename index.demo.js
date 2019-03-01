const fetchShortVolume = require('./index')

fetchShortVolume({
  date: '2019-02-28',
  market: 'NYSE'
})
  .then(a => console.log(a[a.length-1]))
  .catch(console.error)
