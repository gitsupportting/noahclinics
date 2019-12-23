const express = require('express');
const router = express.Router();
const chargebee = require('chargebee');
const moment = require('moment');
moment().format();

//if(current time > started date + 1 year )
/*const start_date = moment()
const one_year_from_start = moment(start_date).add(10, 'month').hours(0).minutes(0).seconds(0); //compare with only the date not time
const currentDate = moment();
console.log(currentDate, one_year_from_start)*/
