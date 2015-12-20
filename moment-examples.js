var moment = require('moment');
var now = moment();

console.log(now.format());

console.log(now.format("dddd, MMMM Do YYYY, h:mm:ss a"));

now.subtract(1, 'year');

console.log(now.format("dddd, MMMM Do YYYY, h:mm:ss a"));

console.log(now.format("MMM do YYYY, h:ma"));

console.log(now.format("X"));

console.log(now.format("x"));

console.log(now.valueOf());

var timestapMoment = moment.utc(now.valueOf());

console.log(timestapMoment.local().format("hh:mm a"));
