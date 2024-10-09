const events = require('events');
const eventEmitter = new events.EventEmitter();

// Listener for the "subscribe" event
eventEmitter.on('subscribe', function(channelName) {
    console.log(`Thanks For Subscribing to ${channelName}`);
});

// Triggering the "subscribe" event
eventEmitter.emit('subscribe', 'College Wallah');
