const Oceanic = require('oceanic.js');
const Client = require('./client.js');

/**
 * @template {keyof Oceanic.ClientEvents} K
 * @param {Client} client 
 * @param  {Oceanic.ClientEvents[K]} eventArgs 
 */
function RunFunction(client, ...eventArgs){}

/**
 * @template {keyof Oceanic.ClientEvents} K
 */
class Event {
    /**
     * 
     * @param {K} event 
     * @param {RunFunction<K>} runFunction 
     */
    constructor(event, runFunction){
        this.event = event;
        this.run = runFunction
    }
}

module.exports = Event;