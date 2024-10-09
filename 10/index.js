const events = require('events');
const eventEmitter = new events.EventEmitter();

// Get the default maximum number of listeners
const defaultMaxListeners = eventEmitter.getMaxListeners();
console.log(`The default maximum number of event listeners are: ${defaultMaxListeners}`);

// Set the maximum number of listeners to 5
eventEmitter.setMaxListeners(5);

// Verify the updated maximum number of listeners
const updatedMaxListeners = eventEmitter.getMaxListeners();
console.log(`The updated maximum number of event listeners are: ${updatedMaxListeners}`);
