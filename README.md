# RegSho-JS

Get shorted volume as reported following the [SEC:s SHO regulation](https://www.investopedia.com/terms/r/regsho.asp) for US stocks at a specified date. 

## Usage

```bash
npm install regsho
```

```JavaScript
const getShortedVolume = require('regsho')

getShortedVolume({
  date: '2019-02-28',
  market: 'NYSE'
})
.then(console.log)

// 
// [{ Date: 2019-02-28T00:00:00.000Z,
//    Symbol: 'AEE',
//    ShortVolume: [Number: 704],
//    ShortExemptVolume: [Number: 0],
//    TotalVolume: [Number: 5409],
//    Market: 'N' },
//   { Date: 2019-02-28T00:00:00.000Z,
//     Symbol: 'AEF',
//     ShortVolume: [Number: 600],
//     ShortExemptVolume: [Number: 0],
//     TotalVolume: [Number: 1324],
//   ...]
```
