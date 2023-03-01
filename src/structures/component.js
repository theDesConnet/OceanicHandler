const Client = require('./client');
const Oceanic = require('oceanic.js');

/**
 * 
 * @param {Client} client 
 * @param {Oceanic.ComponentInteraction} interaction
 */
function ExecuteFuctions(client, interaction) { }

class Component {
    /**
     * @typedef {{componentID: string, componentType: Oceanic.ComponentTypes, execute: ExecuteFuctions}} ComponentOptions
     * @param {ComponentOptions} options 
     */
    constructor(options) {
        this.componentID = options.componentID;
        this.componentType = options.componentType;
        this.execute = options.execute;
    }
}

module.exports = Component;