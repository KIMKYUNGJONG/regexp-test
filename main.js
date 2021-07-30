const str = `
010-1234-5678
thesecon@email.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcc_ddddd
`

//const regexp = new RegExp('the', 'gi')

//console.log(str.match(regexp));
//console.log(regexp.test(str));
//console.log(str.replace(regexp, 'AAA'))

console.log(str.match(/the/g))
console.log(str.match(/the/gi))
console.log(str.match(/\.$/gim))
console.log(str.match(/d{2}/g))
console.log(str.match(/d{2,}/g))
console.log(str.match(/d{2,3}/g))
console.log(str.match(/\b\w{2,3}\b/g))
console.log(str.match(/[0-9]{1,}/g))
console.log(str.match(/\bf\w{1,}\b/g))
console.log(str.match(/\d{1,}/g))
console.log(str.match(/\s/g))

const h = `  the hello  world   !

`
console.log(h.replace(/\s/g,''))
console.log(str.match(/.{1,}(?=@)/g))
console.log(str.match(/(?<=@).{1,}/g))

