const { toFinraUrl } = require('./finra-api')
const t = require('tap')

const attr = toFinraUrl({ date: '2018-01-12', market: 'NYSE' })
t.equals(attr,  'http://regsho.finra.org/FNYXshvol20180112.txt')

