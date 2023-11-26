const moment = require('moment');

const now = moment();
console.log('Current Date and Time:', now.format('YYYY-MM-DD HH:mm:ss'));

const futureDate = now.add(7, 'days');
console.log('Date 7 days from now:', futureDate.format('dddd, MMMM Do YYYY'));
