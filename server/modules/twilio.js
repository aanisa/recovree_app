var express = require('express');
var router = express.Router();
var cronJob = require('cron').CronJob;
var Users = require('../models/user');
var asyncMod = require('async');

//TWILIO
var client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
var twilioNumber = process.env.TWILIO_NUMBER;

var phoneNumbers = [];
var newMember = '';

var welcomeMember = 'Welcome to Recovree';
var reminderMessage = ['This is a friendly reminder to complete your daily Recovree (insert link)',
    'Find a moment to reflect and complete your daily Recovree (insert link)',
    'One day at a time. Find time to complete your daily Recovree (insert link)',
    'Sobriety is a journey. A reminder to complete your daily Recovree (insert link)'
];
var randomIndex = Math.floor(Math.random() * reminderMessage.length);
var randomomizeReminderMessage = reminderMessage[randomIndex];
var reflectionCompleteMessage = ['Thank you for completing your daily Recovree!',
    'Thanks for making Recovree a part of your day!',
    'Many thanks for taking time to complete Recovree today'
];

function sendTwilioSMS(phoneNumber, message) {
    client.messages.create({ to: phoneNumber, from: twilioNumber, body: message },
        function(err, data) {
            // if(err) {
            //   console.log('Error Sending Message');
            // } else {
            //   console.log('SMS SENT', data);
            // }
        });
}


// Send SMS message 6pm everyday
function scheduleSMS(params) {
    // var textJob = new cronJob( '0 18 * * *', function(){ 
    // }
    // console.log('CRON PORTION OF CODE');
    // },  null, true );
}

// var textJob = new cronJob( '* * * * *', function(){ 
// for (var i = 0; i < phoneNumbers.length; i++) {
//   client.messages.create( { to: phoneNumbers[i], from: twilioNumber, body: randomomizeReminderMessage},
//   function( err, data ) {});
//   console.log('Text Reminder Sent To: ', phoneNumbers[i]);
// }
// console.log('CRON PORTION OF CODE');
// },  null, true );


//Logan's Code
var sendReminders = function() {
    var phoneNumbers = [];
    Users.find({}, function(err, allUsers) {
        if (err) {
            console.log('error in find users: ', err);
        }
        for (i = 0; i < allUsers.length; i++) {
            phoneNumbers.push(allUsers[i].username);
        }
        // generateReminders(phoneNumbers);
    });
};

var generateReminders = function(recipients) {
    for (i = 0; i < recipients.length; i++) {
        var message = randomMessage();
        console.log(recipients[i] + ' : ' + message);
    }
};

sendReminders();



module.exports = client;