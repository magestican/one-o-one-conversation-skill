var Alexa = require('alexa-sdk');

var handlers = {
    'Unhandled': function() {
       this.emit(':ask', 'Sorry, that is not a human being, try asking for a real person');
     },
     'LaunchRequest': function () {
         this.emit(':tell','Bryan is my master hahahaha');
     },
    'who': function() {
        var speechOutput = 'who is mark';
        var repromptSpeech = 'mark is rodriguez';

        var person = this.event.request.intent.slots.Person.value.toLowerCase();
        switch(person) {
          case 'mark':
            this.emit(':tell', repromptSpeech);
            break;
          case 'phil':
            this.emit(':tell', 'anderson');
            break;
          case 'brian':
            this.emit(':tell', 'Awesome');
            break;
          case 'bryan':
            this.emit(':tell', 'Awesome');
            break;
          default:
            this.emit(':tell','Could not find that person called ' + person)
            break;
        }
    }
};

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
