const {DateTime, Interval} = require('luxon')

const agora = DateTime.now()

console.log(agora.month)
console.log(agora.day)
console.log(agora.year)

console.log(new Date().toLocaleString())

const diaDoAniversario = DateTime.fromFormat('25/09/2002', 'dd/MM/yyyy')

console.log(diaDoAniversario)

const idade = Interval.fromDateTimes(diaDoAniversario, agora).length('year')

console.log(Math.floor(idade))