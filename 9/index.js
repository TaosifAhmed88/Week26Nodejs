const events = require('events');
const eventEmitter = new events.EventEmitter();

// Creating  an event handler (listener)
function myEventHandler() {
    console.log('Event handler triggered: You subscribed to the event.');
}

// Add the event handler
eventEmitter.on('subscribe', myEventHandler);

// Call (emit) the event
eventEmitter.emit('subscribe');  // This should trigger the event handler and print the message

// Remove the event handler
eventEmitter.removeListener('subscribe', myEventHandler);  //  you can use: eventEmitter.off('subscribe', myEventHandler);

// Try calling (emitting) the event again
eventEmitter.emit('subscribe');  // Nothing should happen, as the event handler has been removed
