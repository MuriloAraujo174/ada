const querystring = require('node:querystring')
const url = require('node:url')

const baseUrl = 'https://siteviagem.com.br'

const uri = querystring.stringify({
    destino: 'Rio de Janeiro',
    periodo: 'Verão'
})

const fullurl = `${baseUrl}/${uri}` 

console.log(fullurl)

const parseUri = querystring.parse(uri)

console.log(uri)
console.log(parseUri)
console.log(parseUri.destino)
console.log(url.parse(fullurl))

const uri2 = querystring.escape('São Paulo')
const unescapedUri2 = querystring.unescape(uri2)

console.log(uri2)
console.log(unescapedUri2)