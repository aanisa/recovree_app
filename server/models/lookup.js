var express = require('express');


//TWILIO
var accountSid = 'AC610eb58033f94d50da2b6a1d43946025';
var authToken = '53cc7f44e80416d531c093f2b934c849';   //need to keep this hidden and gitignore
// var LookupsClient = require('twilio').LookupsClient;
// var client = new LookupsClient(accountSid, authToken);
// var phoneNumbers = client.phoneNumbers('+16122050534');

// var _ = require('lodash');
var Twilio = require('twilio');

var accountSid = process.env.TWILIO_ACCOUNT_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;

var twilio = new Twilio(accountSid, authToken);


var LookupsClient = twilio.LookupsClient;
console.log('LookupsClient is', LookupsClient);
var lookupsClient = new LookupsClient(accountSid, authToken);
var phoneNumbers = lookupsClient.phoneNumbers(phoneNumber);
phoneNumbers.get(function(error, number) {
  console.log('error is ', error);
  console.log('number is ', number);
});
//
// // phoneNumbers.get(function(error, number) {
// //   console.log(number.carrier.type);
// //   console.log(number.carrier.name);
// // });
//
//
// client.phoneNumbers('+16122050534').get({type: 'carrier'}, function(error, number) {
//   console.log(number.carrier.type);
//   console.log(number.carrier.name);
// });
